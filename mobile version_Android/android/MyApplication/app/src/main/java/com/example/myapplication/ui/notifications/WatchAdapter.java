package com.example.myapplication.ui.notifications;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.util.Log;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.view.LayoutInflater;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.myapplication.DetailActivity;
import com.example.myapplication.R;
import com.example.myapplication.ui.home.CardItem;
import com.example.myapplication.ui.home.RecyclerViewAdapter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WatchAdapter extends RecyclerView.Adapter<WatchAdapter.ViewHolder1>{

    private Context mContext;
    private View root;
    // Storing data into SharedPreferences
    private SharedPreferences sharedPreferences;

    private ArrayList<CardItem> my_Card;

    public WatchAdapter(Context context,View root ,ArrayList<CardItem> my_card){
        mContext = context;
        this.root = root;
        this.my_Card = my_card;
    }


    @NonNull
    @Override
    public ViewHolder1 onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.watchlist_card, parent, false);
        return new WatchAdapter.ViewHolder1(view);

    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder1 holder, int position) {
        CardItem now = my_Card.get(position);
        String myKey = now.id + now.name;
        Glide.with(mContext)
                .load(now.img_url)
                .fitCenter()
                .into(holder.card_img);

        holder.card_img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDetails(now.id, now.type);
            }
        });

        String type1 = now.type.equals("tv")? "TV":"Movie";
        holder.menu_out.setText(type1);
        holder.menu_out.setTextColor(mContext.getResources().getColor(R.color.white));
        //delete
        sharedPreferences = mContext.getSharedPreferences("MySharedPref",mContext.MODE_PRIVATE);
        SharedPreferences.Editor myEdit = sharedPreferences.edit();

        holder.delete.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                List<String> keys = new ArrayList<>();
                if(sharedPreferences.contains("allKeys")){
                    String key1 = sharedPreferences.getString("allKeys","");
                    for(String ss: key1.split(",")){
                        if(ss.length()>0)  keys.add(ss);
                    }
                }
                else{
                    keys = new ArrayList<>();
                }
                myEdit.remove(myKey);
                //need to modity allkeys
                keys.remove(myKey);
                StringBuilder new_all_key = new StringBuilder();
                for(int i = 0; i<keys.size(); i++){
                    if(i==keys.size()-1) new_all_key.append(keys.get(i));
                    else new_all_key.append(keys.get(i)+",");
                }
                myEdit.putString("allKeys", new_all_key.toString());

                myEdit.commit();
                my_Card.remove(position);
                notifyItemRemoved(position);
                notifyItemRangeChanged(position, getItemCount());
                TextView text1 = root.findViewById(R.id.text_noWatchlist);
                if(keys.size()==0){
                    text1.setVisibility(View.VISIBLE);
                }
                else text1.setVisibility(View.GONE);
            }
        });



    }

    public void openDetails(String id,String kind){

        Intent intent = new Intent(mContext, DetailActivity.class);
        intent.putExtra("id",id);
        intent.putExtra("type",kind);
        mContext.startActivity(intent);

    }

    @Override
    public int getItemCount() {
        return my_Card.size();
    }

    // View Holder class which
    // extends RecyclerView.ViewHolder
    public class ViewHolder1 extends RecyclerView.ViewHolder {

        // img
        ImageView card_img;
        View view;
        TextView menu_out;
        ImageButton delete;

        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public ViewHolder1(View view)
        {
            super(view);
            this.view = view;
            this.card_img = (ImageView) view.findViewById(R.id.card_img);
            this.menu_out = (TextView) view.findViewById(R.id.kind_of);
            this.delete = (ImageButton) view.findViewById(R.id.deleteButton);
        }

    }

}
