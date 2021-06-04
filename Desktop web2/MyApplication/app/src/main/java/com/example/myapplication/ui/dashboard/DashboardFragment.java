package com.example.myapplication.ui.dashboard;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SearchView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.myapplication.R;
import com.example.myapplication.ui.home.RecyclerViewAdapter;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

//this is search fragment!
public class DashboardFragment extends Fragment {

    private DashboardViewModel dashboardViewModel;
    RequestQueue rq;
    View root;
    SearchAdapter adapter;
    ArrayList<SearchItem> data = new ArrayList<>();
    private boolean first = false;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        dashboardViewModel =
                new ViewModelProvider(this).get(DashboardViewModel.class);
        root = inflater.inflate(R.layout.fragment_dashboard, container, false);


        final SearchView searchView = (SearchView) root.findViewById(R.id.search_view);
        rq = Volley.newRequestQueue(getActivity().getApplicationContext());
        searchView.setQueryHint("Search movies and TV");
        //searchView.setIconified(true);

        searchView.setMaxWidth(Integer.MAX_VALUE);
        searchView.setIconifiedByDefault(false);
        searchView.requestFocus();


        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String s) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String s) {
                //my code here for search
                if(s==null||s.length()==0){
                    TextView text1 = root.findViewById(R.id.search_warn);
                    text1.setVisibility(View.VISIBLE);
                    return false;
                }
                else{
                    getData(s);
                }

                return false;
            }
        });



        return root;
    }



    public void getData(String s){

        String url= "https://oval-access-309907.wl.r.appspot.com/api/multi?query="+ s;
        ArrayList<SearchItem> my_list = new ArrayList<>();
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("result");
                    TextView text1 = root.findViewById(R.id.search_warn);
                    if(values.length()==0){

                        text1.setVisibility(View.VISIBLE);
                        if(first){
                            data.clear();
                            adapter.notifyDataSetChanged();
                        }
                        return;
                    }
                    else{
                        text1.setVisibility(View.GONE);
                    }
                    int len = Math.min(20, values.length());
                    for ( int i=0; i< len; i++) {
                        JSONObject sonuc = values.getJSONObject(i);
                        //time = s5;
                        //vote = s6;
                        if(!sonuc.has("time"))continue;
                        if(!sonuc.has("vote")) continue;
                        SearchItem item = new SearchItem(sonuc.get("imgs").toString(), sonuc.get("name").toString(), sonuc.get("id").toString(),
                                sonuc.get("type").toString(), sonuc.get("time").toString(), sonuc.get("vote").toString());
                        my_list.add(item);
                    }
                    if(first==false) {
                        first = true;
                        FirstCreateRusult(my_list);
                    }
                    else createResult(my_list);

                }  catch (JSONException ex){
                    Log.d("error happen","Volley error!");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d("error happen","Volley error!");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);
    }

    public void FirstCreateRusult(ArrayList<SearchItem> my_list){
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity().getApplicationContext(), RecyclerView.VERTICAL, false);
        RecyclerView recyclerView = root.findViewById(R.id.search_recycler);
        recyclerView.setLayoutManager(layoutManager);
        //must use getActivity!! or we will wrong! getActivity()
        data.addAll(my_list);
        this.adapter = new SearchAdapter(getActivity(), data);
        recyclerView.setAdapter(adapter);
    }

    public void createResult(ArrayList<SearchItem> my_list ){
        data.clear();
        data.addAll(my_list);
        // notify adapter
        adapter.notifyDataSetChanged();
    }

}