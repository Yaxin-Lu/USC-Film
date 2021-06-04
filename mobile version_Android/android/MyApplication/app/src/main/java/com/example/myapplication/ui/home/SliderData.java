package com.example.myapplication.ui.home;

public class SliderData {


    // image url is used to
    // store the url of image
    private String imgUrl;
    public String id;
    public String type;

    // Constructor method.
    public SliderData(String imgUrl, String id, String type) {
        this.imgUrl = imgUrl;
        this.id = id;
        this.type = type;
    }

    // Getter method
    public String getImgUrl() {
        return imgUrl;
    }

    // Setter method
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
