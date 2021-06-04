package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.myapplication.ui.home.CardItem;
import com.example.myapplication.ui.home.SliderData;
import com.example.myapplication.ui.notifications.WatchAdapter;
import com.example.myapplication.ui.recommendAdapter;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import android.text.format.DateFormat;

public class DetailActivity extends AppCompatActivity {
    private static final String TAG = "details";
    String my_id;
    String my_type;
    String name = "";
    String video_key = "";
    String poster = "";
    String backdrop = "";
    boolean ready1 = false;
    boolean ready2 = false;
    boolean ready3 = false;
    boolean ready4 = false;
    boolean ready5 = false;
    ArrayList<CardItem> cast_list;
    ArrayList<CardItem> review_list;
    ArrayList<CardItem> recommend_list;
    private SharedPreferences sharedPreferences;
    LinearLayout my_detail;
    LinearLayout loading;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);


        Intent myIntent = getIntent(); // gets the previously created intent
        this.my_id= myIntent.getStringExtra("id");
        this.my_type= myIntent.getStringExtra("type");
        Log.d(TAG, my_id);
        Log.d(TAG, my_type);
        my_detail = (LinearLayout) findViewById(R.id.my_detail);
        loading = (LinearLayout) findViewById(R.id.loading);


        playDetail();
        PlayVideo();
        playCast();
        playReview();
        recommend();
    }

    public void recommend(){
        recommend_list = new ArrayList<>();
        RequestQueue rq = Volley.newRequestQueue(getApplicationContext());
        String url= "https://oval-access-309907.wl.r.appspot.com/api/recommend?id="+ my_id + "&type=" + my_type;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    int len = Math.min(10, values.length());
                    if(len==0){
                        TextView text1 = findViewById(R.id.recommend_title);
                        text1.setVisibility(View.GONE);
                        ready1 = true;
                        if(ready1&&ready2&&ready3&&ready4&&ready5){
                            my_detail.setVisibility(View.VISIBLE);
                            loading.setVisibility(View.GONE);
                        }
                        return;
                    }
                    for(int i = 0; i<len; i++){
                        JSONObject sonuc = values.getJSONObject(i);
                        //name = s1;
                        //        type = s2;
                        //        id = s3;
                        //        img_url = s4;
                        String img_url;
                        if(sonuc.get("poster_path").equals(null)||sonuc.get("poster_path").toString().length()==0) img_url="https://yaxin-lu.github.io/yaxinlu.github.io/images/movie_placeholder.png";
                        else img_url = "https://image.tmdb.org/t/p/original" + sonuc.get("poster_path").toString();
                        CardItem xin = new CardItem("", my_type,sonuc.get("id").toString(), img_url);
                        recommend_list.add(xin);
                    }
                   displayRecommend();
                }  catch (JSONException ex){
                    Log.d(TAG, "onResponse: error");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d(TAG, "onResponse: error");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);
    }

    public void displayRecommend(){
        LinearLayoutManager layoutManager = new LinearLayoutManager(getApplicationContext(), RecyclerView.HORIZONTAL, false);
        RecyclerView recyclerView = findViewById(R.id.recycler_recommend);
        recyclerView.setLayoutManager(layoutManager);
        //recyclerView.setNestedScrollingEnabled(false);
        //must use getActivity!! or we will wrong!
        recommendAdapter adapter = new recommendAdapter(this,recommend_list);
        recyclerView.setAdapter(adapter);
        ready1 = true;
        if(ready1&&ready2&&ready3&&ready4&&ready5){
            my_detail.setVisibility(View.VISIBLE);
            loading.setVisibility(View.GONE);
        }
    }


    public void playReview(){
        review_list = new ArrayList<>();
        // /api/review
        RequestQueue rq = Volley.newRequestQueue(getApplicationContext());
        String url= "https://oval-access-309907.wl.r.appspot.com/api/review?id="+ my_id + "&type=" + my_type;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    int len = Math.min(3, values.length());
                    if(len==0){
                        TextView text1 = findViewById(R.id.review_title);
                        text1.setVisibility(View.GONE);
                        ready2 = true;
                        if(ready1&&ready2&&ready3&&ready4&&ready5){
                            my_detail.setVisibility(View.VISIBLE);
                            loading.setVisibility(View.GONE);
                        }
                        return;
                    }
                    for(int i = 0; i<len; i++){
                        JSONObject sonuc = values.getJSONObject(i);
                        StringBuilder by = new StringBuilder("by ");
                        //这里应该是username!错了啦
                        JSONObject author_detail = new JSONObject(sonuc.get("author_details").toString());
                        by.append(author_detail.get("username").toString());
                        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
                        Date date = dateFormat.parse(sonuc.get("created_at").toString());
                        String dayOfTheWeek = (String) DateFormat.format("EEEE", date); // Thursday
                        String day          = (String) DateFormat.format("dd",   date); // 20
                        String monthString  = (String) DateFormat.format("MMM",  date); // Jun
                        String year         = (String) DateFormat.format("yyyy", date); // 2013
                        by.append(" on ");
                        by.append(dayOfTheWeek.substring(0,3));
                        by.append(", ");
                        by.append(monthString);
                        by.append(" ");
                        by.append(day);
                        by.append(" ");
                        by.append(year);

                        String vote = author_detail.get("rating").toString();
                        if(author_detail.get("rating").equals(null)) vote="0/5";
                        else{
                            double get = Float.parseFloat(vote)/2;
                            vote =   String.valueOf((int) get);
                            vote = vote +"/5";
                        }
                        String comment = sonuc.get("content").toString();
                        //name = firstline;
                        //    type = second;
                        //      id = third;
                        //        img_url = empty;
                        CardItem xin = new CardItem(by.toString(), vote, comment, "");
                        review_list.add(xin);
                    }
                    displayReview();

                }  catch (JSONException | ParseException ex){
                    Log.d(TAG, "onResponse: error");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d(TAG, "onResponse: error");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);

    }

    public void displayReview(){
        LinearLayoutManager layoutManager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        RecyclerView recyclerView = findViewById(R.id.recycler_review);
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setNestedScrollingEnabled(false);
        //must use getActivity!! or we will wrong!

        ReviewAdapter adapter = new ReviewAdapter(this, review_list);
        recyclerView.setAdapter(adapter);
        ready2 = true;
        if(ready1&&ready2&&ready3&&ready4&&ready5){
            my_detail.setVisibility(View.VISIBLE);
            loading.setVisibility(View.GONE);
        }


    }

    public void playCast(){
        cast_list = new ArrayList<>();
        ///api/credits
        RequestQueue rq = Volley.newRequestQueue(getApplicationContext());
        String url= "https://oval-access-309907.wl.r.appspot.com/api/credits?id="+ my_id + "&type=" + my_type;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("cast");
                    int len = Math.min(6, values.length());
                    if(len==0){
                        TextView text1 = findViewById(R.id.cast_title);
                        text1.setVisibility(View.GONE);
                        ready3 = true;
                        if(ready1&&ready2&&ready3&&ready4&&ready5){
                            my_detail.setVisibility(View.VISIBLE);
                            loading.setVisibility(View.GONE);
                        }
                        return;
                    }
                    for(int i = 0; i<len; i++){
                        JSONObject sonuc = values.getJSONObject(i);
                        //name = s1;
                        //        type = s2;
                        //        id = s3;
                        //        img_url = s4;
                        String img = "";
                        if(sonuc.get("profile_path").equals(null)||sonuc.get("profile_path").toString().length()==0){
                            img = "https://yaxin-lu.github.io/yaxinlu.github.io/images/person-placeholder.png";
                        }
                        else img = "https://image.tmdb.org/t/p/original" + sonuc.get("profile_path").toString();
                         CardItem xin = new CardItem(sonuc.get("name").toString(), "cast", "", img);
                         cast_list.add(xin);
                    }
                    displayCast();

                }  catch (JSONException ex){
                    Log.d(TAG, "onResponse: error");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d(TAG, "onResponse: error");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);
    }

    public void displayCast(){

        RecyclerView recyclerView = findViewById(R.id.recycler_cast);
        recyclerView.setLayoutManager(new GridLayoutManager(getApplicationContext(), 3));
        recyclerView.setNestedScrollingEnabled(false);
        //must use getActivity!! or we will wrong!
        castAdapter adapter = new castAdapter(this, cast_list);
        recyclerView.setAdapter(adapter);
        ready3 = true;
        if(ready1&&ready2&&ready3&&ready4&&ready5){
            my_detail.setVisibility(View.VISIBLE);
            loading.setVisibility(View.GONE);
        }
    }




    public void playDetail(){
       //http://localhost:8080/api/detail2?id=271110&type=movie
        RequestQueue rq = Volley.newRequestQueue(getApplicationContext());
        String url= "https://oval-access-309907.wl.r.appspot.com/api/detail2?id="+ my_id + "&type=" + my_type;

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    name = my_type.equals("tv")? o.get("name").toString():  o.get("title").toString();
                    TextView t1 =  findViewById(R.id.name_of);
                    t1.setText(name);
                    TextView t2 = findViewById(R.id.overview);
                    t2.setText(o.get("overview").toString());
                    if(o.has("overview")&&!o.get("overview").equals(null)&&o.get("overview").toString().length()>0){
                        findViewById(R.id.overview).setVisibility(View.VISIBLE);
                        findViewById(R.id.overview_title).setVisibility(View.VISIBLE);
                    }
                    else{
                        findViewById(R.id.overview).setVisibility(View.GONE);
                        findViewById(R.id.overview_title).setVisibility(View.GONE);
                    }


                    JSONArray values= o.getJSONArray("genres");
                    StringBuilder gen = new StringBuilder();
                    for(int i = 0; i<values.length();i++){
                        JSONObject o1 = new JSONObject(values.get(i).toString());
                        if(i==values.length()-1) gen.append(o1.get("name").toString());
                        else gen.append(o1.get("name").toString()+", ");
                    }
                    if(o.has("genres")&&values.length()>0&&gen.toString().length()>0){
                        findViewById(R.id.genres).setVisibility(View.VISIBLE);
                        findViewById(R.id.genres_title).setVisibility(View.VISIBLE);
                    }
                    else{
                        findViewById(R.id.genres).setVisibility(View.GONE);
                        findViewById(R.id.genres_title).setVisibility(View.GONE);
                    }
                    TextView t3 = findViewById(R.id.genres);
                    t3.setText(gen.toString());
                    String year = my_type.equals("tv")? o.get("first_air_date").toString():o.get("release_date").toString();
                    if(year.length()>=4){
                        TextView t4 = findViewById(R.id.year);
                        t4.setText(year.substring(0,4));
                        findViewById(R.id.year).setVisibility(View.VISIBLE);
                        findViewById(R.id.year_title).setVisibility(View.VISIBLE);
                    }
                    else{
                        findViewById(R.id.year).setVisibility(View.GONE);
                        findViewById(R.id.year_title).setVisibility(View.GONE);
                    }
                    if(o.get("backdrop_path").equals(null)||o.get("backdrop_path").toString().length()==0) backdrop = "https://yaxin-lu.github.io/yaxinlu.github.io/images/back-placeholder.jpg";
                    else backdrop = "https://image.tmdb.org/t/p/original" + o.get("backdrop_path");

                    poster =  "https://image.tmdb.org/t/p/original" + o.get("poster_path").toString();
                    //implement the icons
                    ImageButton btn1 = findViewById(R.id.img_btn1);
                    sharedPreferences = getSharedPreferences("MySharedPref",MODE_PRIVATE);
                    SharedPreferences.Editor myEdit = sharedPreferences.edit();
                    String myKey = my_id + name;
                    if(sharedPreferences.contains(myKey)){
                        //need remove icon
                        btn1.setImageResource(R.drawable.remove_circle_big);
                    }
                    else{
                        btn1.setImageResource(R.drawable.add_circle_big);
                    }
                    btn1.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
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

                            if(sharedPreferences.contains(myKey)){
                                String text1 = name+" was removed from Watchlist";
                                Toast.makeText(getApplicationContext(),  text1 , Toast.LENGTH_LONG).show();
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
                                btn1.setImageResource(R.drawable.add_circle_big);

                            }
                            else{
                                String text2 = name+" was added into Watchlist";
                                //tosat 还是不显示 回头再把getContext删了或者冷启动试试
                                Toast.makeText(getApplicationContext(), text2, Toast.LENGTH_LONG).show();
                                Log.d("watch",text2);
                                myEdit.putString(myKey, name+","+ my_type+"," + my_id +","+ poster);
                                keys.add(myKey);
                                StringBuilder new_all_key = new StringBuilder();
                                for(int i = 0; i<keys.size(); i++){
                                    if(i==keys.size()-1) new_all_key.append(keys.get(i));
                                    else new_all_key.append(keys.get(i)+",");
                                }
                                myEdit.putString("allKeys", new_all_key.toString());
                                btn1.setImageResource(R.drawable.remove_circle_big);
                            }
                            myEdit.commit();
                        }
                    });
                    ImageButton btn2 = findViewById(R.id.img_btn2);
                    btn2.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            //go to facebook
                            String url_facebook = "https://www.facebook.com/sharer.php?u=" + "https://www.themoviedb.org/" + my_type +"/"+ my_id;
                            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url_facebook));
                            startActivity(browserIntent);
                        }
                    });
                    ImageButton btn3 = findViewById(R.id.img_btn3);
                    btn3.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            //go twitter
                            String url_twitter = "https://twitter.com/intent/tweet?text=Check this out!"+ "%0A" + "https://www.themoviedb.org/" + my_type +"/"+ my_id;
                            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url_twitter));
                            startActivity(browserIntent);
                        }
                    });
                    ready4 = true;
                    if(ready1&&ready2&&ready3&&ready4&&ready5){
                        my_detail.setVisibility(View.VISIBLE);
                        loading.setVisibility(View.GONE);
                    }

                }  catch (JSONException ex){
                    Log.d(TAG, "onResponse: error");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d(TAG, "onResponse: error");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);
    }



    public void PlayVideo(){
        //  /api/detail?id=271110&type=movie
        RequestQueue rq = Volley.newRequestQueue(getApplicationContext());
        String url= "https://oval-access-309907.wl.r.appspot.com/api/detail?id="+ my_id + "&type=" + my_type;
        ImageView img_replace = findViewById(R.id.replace_video);
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                // Do something with the response
                try{
                    JSONObject o = new JSONObject(response);
                    JSONArray values=o.getJSONArray("results");
                    boolean find = false;
                    for ( int i=0; i< values.length(); i++) {
                        JSONObject sonuc = values.getJSONObject(i);
                        //暂时传movie
                        if(sonuc.get("type").toString().equals("Trailer")){
                            video_key = sonuc.get("key").toString();
                            find = true;
                        }
                        else if(sonuc.get("type").toString().equals("Teaser")){
                            video_key = sonuc.get("key").toString();
                            find = true;
                        }
                        if(find) break;
                    }
                    if(find) {
                        img_replace.setVisibility(View.GONE);
                        YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                        getLifecycle().addObserver(youTubePlayerView);

                        youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                            @Override
                            public void onReady(@NonNull YouTubePlayer youTubePlayer) {
                                String videoId = video_key;
                                youTubePlayer.cueVideo(videoId, 0);
                            }
                        });
                    }
                    else{
                        //display backdrop_path
                        img_replace.setVisibility(View.VISIBLE);
                        img_replace.setImageURI(Uri.parse(backdrop));
                    }
                    ready5 = true;
                    if(ready1&&ready2&&ready3&&ready4&&ready5){
                        my_detail.setVisibility(View.VISIBLE);
                        loading.setVisibility(View.GONE);
                    }

                }  catch (JSONException ex){
                    Log.d(TAG, "onResponse: error");
                }

            }
        },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // Handle error
                        Log.d(TAG, "onResponse: error");
                    }
                });

        // Add the request to the RequestQueue.
        rq.add(stringRequest);
    }
}