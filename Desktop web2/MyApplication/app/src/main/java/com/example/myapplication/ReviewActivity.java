package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import org.w3c.dom.Text;

public class ReviewActivity extends AppCompatActivity {

    String name;
    String rate;

    String content = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review);

        Intent myIntent = getIntent(); // gets the previously created intent
        this.name= myIntent.getStringExtra("name");
        this.rate= myIntent.getStringExtra("rate");
        this.content= myIntent.getStringExtra("content");
        TextView my_writer = findViewById(R.id.writer);
        TextView rate1 = findViewById(R.id.rate);
        TextView content1= findViewById(R.id.review_content);

        my_writer.setText(name);
        rate1.setText(rate);
        content1.setText(content);

    }
}