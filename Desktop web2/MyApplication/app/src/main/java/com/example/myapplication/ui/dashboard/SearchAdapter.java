package com.example.myapplication.ui.dashboard;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
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
import com.example.myapplication.ui.home.RecyclerViewAdapter;

import java.util.ArrayList;
import java.util.List;

public class SearchAdapter extends RecyclerView.Adapter<SearchAdapter.ViewHolder> {

    private Context mContext;

    private List<SearchItem> my_list;

    public SearchAdapter(Context context,ArrayList<SearchItem> list){
        mContext = context;
        this.my_list = list;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.search_cards, parent, false);
        return new SearchAdapter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        SearchItem now = my_list.get(position);
        Glide.with(mContext)
                .load(now.url_img)
                .centerCrop()
                .into(holder.card_img);
        String type1 = "";
        if(now.time.length()>=4) type1 = now.type.toUpperCase() + "("+ now.time.substring(0,4) +")";
        else type1 = now.type.toUpperCase();
        holder.title1.setText(type1);
        holder.title2.setText(now.name.toUpperCase());
        holder.title3.setText(now.vote);
        holder.card_img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDetails(now.id, now.type);
            }
        });
        //add listener later
    }

    public void openDetails(String id,String kind){

        Intent intent = new Intent(mContext,DetailActivity.class);
        intent.putExtra("id",id);
        intent.putExtra("type",kind);
        mContext.startActivity(intent);

    }

    @Override
    public int getItemCount() {
        return my_list.size();
    }

    // View Holder class which
    // extends RecyclerView.ViewHolder
    public class ViewHolder extends RecyclerView.ViewHolder {

        // img
        public ImageView card_img;
        public View view;
        public TextView title1;
        public TextView title2;
        public TextView title3;

        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public ViewHolder(View view)
        {
            super(view);
            this.view = view;
            this.card_img = (ImageView) view.findViewById(R.id.Search_card_img);
            this.title1 = (TextView) view.findViewById(R.id.text_kind);
            this.title2 = (TextView) view.findViewById(R.id.text_title);
            this.title3 = (TextView) view.findViewById(R.id.vote);
        }

    }


}



