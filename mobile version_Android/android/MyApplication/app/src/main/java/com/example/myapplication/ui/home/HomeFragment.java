package com.example.myapplication.ui.home;


import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Bundle;
import android.os.Looper;
import android.text.SpannableString;
import android.text.style.ImageSpan;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.ToggleButton;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import com.android.volley.toolbox.Volley;
import com.android.volley.RequestQueue;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;

import com.example.myapplication.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.lang.reflect.Array;
import java.util.Arrays;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.smarteist.autoimageslider.SliderView;
import java.util.ArrayList;
import java.util.Arrays;



import android.view.MenuItem;
import android.widget.PopupMenu;
import android.widget.Toast;

public class HomeFragment extends Fragment {

    private HomeViewModel homeViewModel;
    private View root;

    int cnt;


    LinearLayout loading1;
    TextView text_home;
    ToggleButton btn1;
    ToggleButton btn2;
    ScrollView scrollView2;


    ArrayList<SliderData> slide_movie = new ArrayList<>();
    ArrayList<SliderData> slide_tv = new ArrayList<>();

    ArrayList<CardItem> top_movie = new ArrayList<>();
    ArrayList<CardItem> pop_movie = new ArrayList<>();
    ArrayList<CardItem> top_tv = new ArrayList<>();
    ArrayList<CardItem> pop_tv = new ArrayList<>();

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        ((AppCompatActivity) getActivity()).getSupportActionBar().hide();

        homeViewModel =
                new ViewModelProvider(this).get(HomeViewModel.class);
        this.root = inflater.inflate(R.layout.fragment_home, container, false);

        loading1 = root.findViewById(R.id.loading1);
        text_home = root.findViewById(R.id.text_home);
        btn1 = root.findViewById(R.id.toggleButton);
        btn2 = root.findViewById(R.id.toggleButton2);
        scrollView2 = root.findViewById(R.id.scrollView2);

        cnt = 0;
        text_home.setVisibility(View.GONE);
        btn1.setVisibility(View.GONE);
        btn2.setVisibility(View.GONE);
        scrollView2.setVisibility(View.GONE);
        loading1.setVisibility(View.VISIBLE);

        ToggleButton toggle = (ToggleButton) root.findViewById(R.id.toggleButton);
        ToggleButton toggle2 = (ToggleButton) root.findViewById(R.id.toggleButton2);
        LinearLayout movie_Layout =(LinearLayout)root.findViewById(R.id.home_movie);
        LinearLayout tv_Layout =(LinearLayout)root.findViewById(R.id.home_tv);
        toggle.setChecked(true);
        toggle2.setChecked(false);
        tv_Layout.setVisibility(LinearLayout.GONE);
        movie_Layout.setVisibility(LinearLayout.VISIBLE);

        toggle.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    // The toggle is enabled
                    toggle2.setChecked(false);
                    tv_Layout.setVisibility(LinearLayout.GONE);
                    movie_Layout.setVisibility(LinearLayout.VISIBLE);
                } else {
                    // The toggle is disabled
                    toggle2.setChecked(true);
                    movie_Layout.setVisibility(LinearLayout.GONE);
                    tv_Layout.setVisibility(LinearLayout.VISIBLE);
                }
            }
        });


        toggle2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    // The toggle is enabled
                    toggle.setChecked(false);
                    movie_Layout.setVisibility(LinearLayout.GONE);
                    tv_Layout.setVisibility(LinearLayout.VISIBLE);
                } else {
                    // The toggle is disabled
                    toggle.setChecked(true);
                    tv_Layout.setVisibility(LinearLayout.GONE);
                    movie_Layout.setVisibility(LinearLayout.VISIBLE);
                }
            }
        });

        TextView t1 = root.findViewById(R.id.TMDB1);
        TextView t2 = root.findViewById(R.id.TMDB2);
        t1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.themoviedb.org/"));
                getActivity().startActivity(browserIntent);
            }
        });

        t2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.themoviedb.org/"));
                getActivity().startActivity(browserIntent);
            }
        });


        getSlideData("movie");
        getPopData("movie");
        getTopData("movie");

        getSlideData("tv");
        getPopData("tv");
        getTopData("tv");


        return root;

    }



    public void getSlideData(String type){
        RequestQueue rq = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url= "";
        if(type.equals("movie")){
            ///api/popular
            url =  "https://oval-access-309907.wl.r.appspot.com/api/status";
        }
        else{
            url = "https://oval-access-309907.wl.r.appspot.com/api/trend-tv";
        }

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    int len = Math.min(values.length(),6);
                    for ( int i=0; i< len; i++) {
                        JSONObject sonuc = values.getJSONObject(i);
                        if(type.equals("movie")) slide_movie.add(new SliderData("https://image.tmdb.org/t/p/original" + sonuc.get("poster_path"),
                                sonuc.get("id").toString(), type));
                        else slide_tv.add(new SliderData("https://image.tmdb.org/t/p/original" + sonuc.get("poster_path"),
                                sonuc.get("id").toString(), type));
                    }
                    CreateSlides(type);

                    cnt++;
                    if(cnt==6){

                        new android.os.Handler(Looper.getMainLooper()).postDelayed(
                                new Runnable() {
                                    public void run() {
                                        text_home.setVisibility(View.VISIBLE);
                                        btn1.setVisibility(View.VISIBLE);
                                        btn2.setVisibility(View.VISIBLE);
                                        scrollView2.setVisibility(View.VISIBLE);
                                        loading1.setVisibility(View.GONE);
                                    }
                                },
                                3000);
                    }

                }  catch (JSONException ex){}

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);

    }

    public void getTopData(String type){
        RequestQueue rq = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url= "";
        if(type.equals("movie")){
            ///api/popular
            url =  "https://oval-access-309907.wl.r.appspot.com/api/tp-m";
        }
        else{
            url = "https://oval-access-309907.wl.r.appspot.com/api/rated-tv";
        }


        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    int len = Math.min(values.length(),10);
                    for ( int i=0; i< len; i++) {
                        JSONObject sonuc = values.getJSONObject(i);
                        String xin_name = "";
                        if(type.equals("movie")) xin_name = sonuc.get("title").toString();
                        else xin_name = sonuc.get("name").toString();

                        CardItem xin = new CardItem(xin_name, type, sonuc.getString("id").toString(),
                                "https://image.tmdb.org/t/p/original" + sonuc.get("poster_path").toString());
                        if(type.equals("movie")) top_movie.add(xin);
                        else top_tv.add(xin);

                    }
                    createTop(type);
                    cnt++;
                    if(cnt==6){
                        new android.os.Handler(Looper.getMainLooper()).postDelayed(
                                new Runnable() {
                                    public void run() {
                                        text_home.setVisibility(View.VISIBLE);
                                        btn1.setVisibility(View.VISIBLE);
                                        btn2.setVisibility(View.VISIBLE);
                                        scrollView2.setVisibility(View.VISIBLE);
                                        loading1.setVisibility(View.GONE);
                                    }
                                },
                                3000);
                    }
                }  catch (JSONException ex){}

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);

    }




    public void getPopData(String type){
        RequestQueue rq = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url= "";
        if(type.equals("movie")){
            ///api/popular
            url = "https://oval-access-309907.wl.r.appspot.com/api/popular";
        }
        else{
            url = "https://oval-access-309907.wl.r.appspot.com/api/pop-tv";
        }
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    int len = Math.min(values.length(),10);
                    for ( int i=0; i< len; i++) {
                        JSONObject sonuc = values.getJSONObject(i);
                        String xin_name = "";
                        if(type.equals("movie")) xin_name = sonuc.get("title").toString();
                        else xin_name = sonuc.get("name").toString();
                        CardItem xin = new CardItem(xin_name, type, sonuc.getString("id").toString(),
                                "https://image.tmdb.org/t/p/original" + sonuc.get("poster_path").toString());

                        if(type.equals("movie"))pop_movie.add(xin);
                        else pop_tv.add(xin);
                    }
                    createPop(type);
                    cnt++;
                    if(cnt==6){
                        new android.os.Handler(Looper.getMainLooper()).postDelayed(
                                new Runnable() {
                                    public void run() {
                                        text_home.setVisibility(View.VISIBLE);
                                        btn1.setVisibility(View.VISIBLE);
                                        btn2.setVisibility(View.VISIBLE);
                                        scrollView2.setVisibility(View.VISIBLE);
                                        loading1.setVisibility(View.GONE);
                                    }
                                },
                                3000);
                    }
                }  catch (JSONException ex){}

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);



    }

    public void CreateSlides(String type){
        // we are creating array list for storing our image urls.
        SliderView sliderView;
        SliderAdapter adapter;

        if(type.equals("tv")){
            sliderView = root.findViewById(R.id.slider_tv);
            adapter = new SliderAdapter(getActivity(), slide_tv);
        }
        else{
            sliderView = root.findViewById(R.id.slider);
            adapter = new SliderAdapter(getActivity(), slide_movie);
        }

        // passing this array list inside our adapter class.

        // below method is used to set auto cycle direction in left to
        // right direction you can change according to requirement.
        sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);

        // below method is used to
        // setadapter to sliderview.
        sliderView.setSliderAdapter(adapter);

        // below method is use to set
        // scroll time in seconds.
        sliderView.setScrollTimeInSec(3);

        // to set it scrollable automatically
        // we use below method.
        sliderView.setAutoCycle(true);
        // to start autocycle below method is used.
        sliderView.startAutoCycle();

    }

    public void createTop(String type){
        RecyclerView recyclerView;
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity().getApplicationContext(), RecyclerView.HORIZONTAL, false);
        if(type.equals("movie")) recyclerView = root.findViewById(R.id.recycler1);
        else recyclerView = root.findViewById(R.id.recycler_tv1);
        recyclerView.setLayoutManager(layoutManager);
        RecyclerViewAdapter adapter;
        //must use getActivity!! or we will wrong!
        if(type.equals("tv")) adapter= new RecyclerViewAdapter(getActivity(), top_tv);
        else adapter = new RecyclerViewAdapter(getActivity(), top_movie);
        recyclerView.setAdapter(adapter);
    }

    public void createPop(String type){
        RecyclerView recyclerView;
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity().getApplicationContext(), RecyclerView.HORIZONTAL, false);
        if(type.equals("movie")) recyclerView = root.findViewById(R.id.recycler2);
        else recyclerView = root.findViewById(R.id.recycler_tv2);
        recyclerView.setLayoutManager(layoutManager);
        RecyclerViewAdapter adapter;
        //must use getActivity!! or we will wrong!
        if(type.equals("tv")) adapter= new RecyclerViewAdapter(getActivity(), pop_tv);
        else adapter = new RecyclerViewAdapter(getActivity(), pop_movie);
        recyclerView.setAdapter(adapter);
    }



}