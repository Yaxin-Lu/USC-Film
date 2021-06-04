package com.example.myapplication.ui;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.myapplication.DetailActivity;
import com.example.myapplication.R;
import com.example.myapplication.ReviewAdapter;
import com.example.myapplication.ui.home.CardItem;
import com.example.myapplication.ui.home.RecyclerViewAdapter;

import java.util.ArrayList;

public class recommendAdapter extends RecyclerView.Adapter<recommendAdapter.MyView2> {

    private Context mContext;
    // Storing data into SharedPreferences
    private SharedPreferences sharedPreferences;
    private ArrayList<CardItem> my_Card;

    public recommendAdapter(Context context,ArrayList<CardItem> my_card){
        mContext = context;
        this.my_Card = my_card;
    }


    @NonNull
    @Override
    public MyView2 onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recommend_card, parent, false);
        return new recommendAdapter.MyView2(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyView2 holder, int position) {
        CardItem now = my_Card.get(position);
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

    public static class MyView2 extends RecyclerView.ViewHolder {

        // img
        ImageView card_img;
        View view;

        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public MyView2(View view)
        {
            super(view);
            this.view = view;
            this.card_img = (ImageView) view.findViewById(R.id.recommend_img);

        }

    }
}
