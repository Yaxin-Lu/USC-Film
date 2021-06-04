package com.example.myapplication;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.myapplication.ui.dashboard.SearchAdapter;
import com.example.myapplication.ui.dashboard.SearchItem;
import com.example.myapplication.ui.home.CardItem;

import java.util.ArrayList;
import java.util.List;

public class ReviewAdapter extends RecyclerView.Adapter<ReviewAdapter.ViewHolder3> {
    private Context mContext;
    private List<CardItem> my_list;


    public ReviewAdapter(Context context, ArrayList<CardItem> list){
        mContext = context;
        this.my_list = list;
    }

    @NonNull
    @Override
    public ViewHolder3 onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.review, parent, false);
        return new ReviewAdapter.ViewHolder3(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder3 holder, int position) {
        CardItem now = my_list.get(position);
        //set author
        //name = s1;
        //        type = s2;
        //        id = s3;
        //        img_url = s4;
        holder.author.setText(now.name);
        holder.rate.setText(now.type);
        holder.content.setText(now.id);
        holder.view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDetails(now.name, now.type, now.id);
            }
        });
    }

    public void openDetails(String name,String rate, String content){

        Intent intent = new Intent(mContext, ReviewActivity.class);
        intent.putExtra("name",name);
        intent.putExtra("rate",rate);
        intent.putExtra("content",content);
        mContext.startActivity(intent);

    }



    @Override
    public int getItemCount() {
        return my_list.size();
    }

    public class ViewHolder3 extends RecyclerView.ViewHolder {

        // img
        View view;
        TextView author;
        TextView rate;
        TextView content;
        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public ViewHolder3(View view)
        {
            super(view);
            this.view = view;

            this.author = (TextView) view.findViewById(R.id.author);
            this.rate = (TextView) view.findViewById(R.id.vote_by);
            this.content = (TextView) view.findViewById(R.id.my_review);
        }

    }
}
