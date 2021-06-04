package com.example.myapplication;

import android.content.Context;
import android.content.SharedPreferences;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.myapplication.ui.home.CardItem;
import com.example.myapplication.ui.notifications.WatchAdapter;

import java.util.ArrayList;

public class castAdapter extends RecyclerView.Adapter<castAdapter.ViewHolder2>{
    private Context mContext;

    private ArrayList<CardItem> my_Card;

    public castAdapter(Context context,ArrayList<CardItem> my_card){
        mContext = context;
        this.my_Card = my_card;
    }

    @NonNull
    @Override
    public ViewHolder2 onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.cast_item, parent, false);
        return new castAdapter.ViewHolder2(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder2 holder, int position) {
        CardItem now = my_Card.get(position);
        Glide.with(mContext)
                .load(now.img_url)
                .fitCenter()
                .into(holder.card_img);
        //set name
        holder.name_cast.setText(now.name);
    }

    @Override
    public int getItemCount() {
        return my_Card.size();
    }

    public class ViewHolder2 extends RecyclerView.ViewHolder {

        // img
        ImageView card_img;
        View view;
        TextView name_cast;

        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public ViewHolder2(View view)
        {
            super(view);
            this.view = view;
            this.card_img = (ImageView) view.findViewById(R.id.cast_image);
            this.name_cast = (TextView) view.findViewById(R.id.name_cast);
        }

    }

}
