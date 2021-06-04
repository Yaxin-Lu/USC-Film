package com.example.myapplication.ui.home;


import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.MyView> {

    // List with String type

    private Context mContext;
    // Storing data into SharedPreferences
    private SharedPreferences sharedPreferences;

    private ArrayList<CardItem> my_Card;

    public RecyclerViewAdapter(Context context,ArrayList<CardItem> my_card){
        mContext = context;
        this.my_Card = my_card;
    }

    @NonNull
    @Override
    public MyView onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.cards, parent, false);
        return new MyView(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyView holder, int position) {
        CardItem now = my_Card.get(position);
        Glide.with(mContext)
                .load(now.img_url)
                .fitCenter()
                .into(holder.card_img);
        //add event onclick
        holder.card_img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDetails(now.id, now.type);
            }
        });

        sharedPreferences = mContext.getSharedPreferences("MySharedPref",mContext.MODE_PRIVATE);
        SharedPreferences.Editor myEdit = sharedPreferences.edit();

        String myKey = now.id + now.name;

        holder.menu_out.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = holder.menu_out;
                // Initializing the popup menu and giving the reference as current context
                PopupMenu popupMenu = new PopupMenu(mContext, textView);

                // Inflating popup menu from popup_menu.xml file
                popupMenu.getMenuInflater().inflate(R.menu.popup_menu, popupMenu.getMenu());

                // item.setVisible(false);
                // popupMenu.getMenu().getItem(4).setVisible(true);
                if(sharedPreferences.contains(myKey)){
                    popupMenu.getMenu().getItem(3).setTitle("Remove from Watchlist");
                }
                else{
                    popupMenu.getMenu().getItem(3).setTitle("Add into Watchlist");
                }


                //add listener to popup item
                popupMenu.setOnMenuItemClickListener(item -> {
                    if (item.getItemId() == R.id.TMDB) {

                        String url_tmdb = "https://www.themoviedb.org/" + now.type +"/"+ now.id;
                        Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url_tmdb));
                        mContext.startActivity(browserIntent);
                        Log.d("TMDB","clicked");
                    } else if (item.getItemId() == R.id.Facebook) {
                        String url_facebook = "https://www.facebook.com/sharer.php?u=" + "https://www.themoviedb.org/" + now.type +"/"+ now.id;
                        Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url_facebook));
                        mContext.startActivity(browserIntent);
                    }
                    else if(item.getItemId() == R.id.Twitter){
                        String url_twitter = "https://twitter.com/intent/tweet?text=Check this out!"+ "%0A" + "https://www.themoviedb.org/" + now.type +"/"+ now.id;
                        Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url_twitter));
                        mContext.startActivity(browserIntent);
                    }
                    else{
                        List<String> keys = new ArrayList<>();
                        if(sharedPreferences.contains("allKeys")){
                            String key1 = sharedPreferences.getString("allKeys","");
                            for(String ss: key1.split(",")){
                              if(ss.length()>0)   keys.add(ss);
                            }
                        }
                        else{
                            keys = new ArrayList<>();
                        }
                        Log.d("watchlist",item.getTitle().toString());
                        if(sharedPreferences.contains(myKey)){
                            String text1 = now.name+" was removed from Watchlist";
                            Toast.makeText(mContext.getApplicationContext(),  text1 , Toast.LENGTH_LONG).show();
                            Log.d("watch",text1);
                            myEdit.remove(myKey);
                            //and I need to update allKeys entry
                            keys.remove(myKey);
                            StringBuilder new_all_key = new StringBuilder();
                            for(int i = 0; i<keys.size(); i++){
                                if(i==keys.size()-1) new_all_key.append(keys.get(i));
                                else new_all_key.append(keys.get(i)+",");
                            }
                            myEdit.putString("allKeys", new_all_key.toString());
                        }
                        else{
                            String text2 = now.name+" was added into Watchlist";
                            //tosat 还是不显示 回头再把getContext删了或者冷启动试试
                            Toast.makeText(mContext.getApplicationContext(), text2, Toast.LENGTH_LONG).show();
                            Log.d("watch",text2);
                            myEdit.putString(myKey, now.name+","+ now.type+","+now.id+","+now.img_url);
                            keys.add(myKey);
                            StringBuilder new_all_key = new StringBuilder();
                            for(int i = 0; i<keys.size(); i++){
                                if(i==keys.size()-1) new_all_key.append(keys.get(i));
                                else new_all_key.append(keys.get(i)+",");
                            }
                            myEdit.putString("allKeys", new_all_key.toString());
                        }
                        myEdit.commit();
                    }
                    return true;
                });


                // Showing the popup menu
                popupMenu.show();
            }


        });;



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
    public static class MyView extends RecyclerView.ViewHolder {

        // img
        ImageView card_img;
        View view;
        TextView menu_out;
        // parameterised constructor for View Holder class
        // which takes the view as a parameter
        public MyView(View view)
        {
            super(view);
            this.view = view;
            this.card_img = (ImageView) view.findViewById(R.id.card_img);
            this.menu_out = (TextView) view.findViewById(R.id.pop_menu_button);
        }

    }


}