package com.example.myapplication.ui.notifications;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.myapplication.R;
import com.example.myapplication.ui.home.CardItem;
import com.example.myapplication.ui.home.RecyclerViewAdapter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class NotificationsFragment extends Fragment {

    private NotificationsViewModel notificationsViewModel;
    private RecyclerView recyclerView;
    private SharedPreferences sharedPreferences;
    ArrayList<CardItem> data = new ArrayList<>();
    View root;

    public static NotificationsFragment newInstance() {
        NotificationsFragment fragment = new NotificationsFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
    @Override
    public void onResume() {
        super.onResume();
        // Check should we need to refresh the fragment

            updateData();

    }






    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        notificationsViewModel =
                new ViewModelProvider(this).get(NotificationsViewModel.class);
        root = inflater.inflate(R.layout.fragment_notifications, container, false);

        updateData();
        return root;
    }

    public void updateData(){
        sharedPreferences = getActivity().getSharedPreferences("MySharedPref",getActivity().MODE_PRIVATE);
        SharedPreferences.Editor myEdit = sharedPreferences.edit();
        data.clear();

        //we will get
        List<String> keys=new ArrayList<>();;
        if(sharedPreferences.contains("allKeys")){
            String key1 = sharedPreferences.getString("allKeys","");
            for(String ss: key1.split(",")){
                if(ss.length()>0)   keys.add(ss);
            }
        }
        else{
            keys = new ArrayList<>();
        }
        for(String key: keys){
            String[] single = sharedPreferences.getString(key,"") .toString().split(",");
            data.add(new CardItem(single[0], single[1], single[2], single[3]));
        }

        TextView text1 = root.findViewById(R.id.text_noWatchlist);
        if(keys.size()==0){
            text1.setVisibility(View.VISIBLE);
        }
        else text1.setVisibility(View.GONE);


        //we will use gridmanager : recyclerView.setLayoutManager(new GridLayoutManager(this, numberOfColumns));
        RecyclerView recyclerView = root.findViewById(R.id.watch_recycler);
        recyclerView.setLayoutManager(new GridLayoutManager(getActivity().getApplicationContext(), 3));

        //must use getActivity!! or we will wrong!
        WatchAdapter adapter = new WatchAdapter(getActivity(), root,data);
        recyclerView.setAdapter(adapter);
        ItemTouchHelper itemTouchHelper = new ItemTouchHelper(simpleCallback);
        itemTouchHelper.attachToRecyclerView(recyclerView);
    }



    ItemTouchHelper.SimpleCallback simpleCallback = new ItemTouchHelper.SimpleCallback(ItemTouchHelper.UP | ItemTouchHelper.DOWN|
            ItemTouchHelper.START| ItemTouchHelper.END, 0){
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {
            int fromPosition = viewHolder.getAbsoluteAdapterPosition();
            int toPosition  = target.getAbsoluteAdapterPosition();

            Collections.swap(data, fromPosition, toPosition);
            recyclerView.getAdapter().notifyItemMoved(fromPosition, toPosition);

            return false;
        }

        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {

        }
        @Override
        public int getMovementFlags(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
            return makeFlag(ItemTouchHelper.ACTION_STATE_DRAG,
                    ItemTouchHelper.DOWN | ItemTouchHelper.UP | ItemTouchHelper.START | ItemTouchHelper.END);
        }
    };

}