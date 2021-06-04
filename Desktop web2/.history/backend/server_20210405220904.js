//server.js
var express = require('express');
var cors = require('cors');
const path = require('path');

var app = express();
const axios = require("axios");
///const { element } = require('protractor');


//app.use(cors());
app.use(express.static(path.join(__dirname, 'my-app')));

app.use('/*', function(req,res){
  res.sendFile(path.join(__dirname +'/my-app/index.html'));
})


var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})


app.get("/api/status", function (req, res) {
  //this status call return the now playing! 4.1.4
  console.log("'/status' call");
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

app.get("/api/multi", function (req, res) {
  let multi = [];
  var j = 0;
  //this call return multi-search in 4.1.1
  //must return the type multi!
  console.log("'/multi search' call");
  var query1 = req.query.query;
  console.log(query1);
  var url = "https://api.themoviedb.org/3/search/multi?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&query="+query1;
  console.log(url);
    axios.get(url)
       .then((response) =>  {
         for(var i = 0; i<response.data.results.length; i++){

           let element = response.data.results[i];
           console.log(element);
           let tmp = {};
           tmp.id = element['id'];
           //'https://image.tmdb.org/t/p/w500' +

           tmp.imgs = 'https://image.tmdb.org/t/p/w500' + element['backdrop_path'];
           if(element['backdrop_path']==null||element['backdrop_path']=="") tmp.imgs = "https://yaxin-lu.github.io/yaxinlu.github.io/images/back-placeholder.jpg";
           tmp.type = element['media_type'];
           if(tmp.type=="movie") tmp.name = element['title'];
           else if(tmp.type=="tv") tmp.name = element['name'];
           else{
             continue;
           }
           j++;
           multi.push(tmp);
           console.log(tmp);
           if(j==7) break;
         }
          res.json(multi);
      }).catch(err => res.secn(err));

});

app.get("/api/popular", function (req, res) {
  //this status call return the popular movies 4.1.5
  console.log("'/popular movie call");
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

///api/tp-m
app.get("/api/tp-m", function (req, res) {
  //this status call return the top rated movies 4.1.3
  console.log("'/top rated movie call");
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

///api/trending-m
app.get("/api/trending-m", function (req, res) {
  //this status call return the top rated movies 4.1.3
  console.log("'/trending movie call");
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=135b3d22e9e861ca6badb62a09db0df1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

// "/api/pop-tv"
app.get("/api/pop-tv", function (req, res) {
  //this status call return the top rated movies 4.1.14
  console.log("'/pop tv call");
    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

// "/api/rated-tv"
app.get("/api/rated-tv", function (req, res) {
  //this status call return the top rated movies 4.1.14
  console.log("'/rated tv call");
    axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});

// trending tv show
app.get("/api/trend-tv", function (req, res) {
  //this status call return the top rated movies 4.1.14
  console.log("'/trending tv call");
    axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=135b3d22e9e861ca6badb62a09db0df1")
       .then(response => res.json(response.data))
       .catch(err => res.secn(err));

});



// get details video of tv or movie
app.get("/api/detail", function (req, res) {
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);

  var url = "https://api.themoviedb.org/3/" + type + "/"+ id +"/videos?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail movie
  //https://api.themoviedb.org/3/movie/<<movie_id>>/videos?api_key=<<api_key>>&languag e=en-US&page=1
  console.log("'/detail movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));


});

// get details of tv or movie https://api.themoviedb.org/3/movie/<<movie_id>>?api_key=<<api_key>>&language=en- US&page=1
app.get("/api/detail2", function (req, res) {
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);
  //https://api.themoviedb.org/3/tv/<<tvshow_id>>?api_key=<<api_key>>&language=en- US&page=1
  var url = "https://api.themoviedb.org/3/"+ type + "/"+ id +"?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  console.log("'/detail movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});

//https://api.themoviedb.org/3/movie/464052/credits?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1
//get credits
app.get("/api/credits", function (req, res) {
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);
//https://api.themoviedb.org/3/tv/85271/credits?api_key=97588ddc4a26e3091152aa0c9a40de 22&language=en-US&page=1
  var url = "https://api.themoviedb.org/3/"+ type + "/"+ id +"/credits?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  console.log("'/detail movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});

//https://api.themoviedb.org/3/person/550843?api_key=97588ddc4a26e3091152aa0c9a40de2 2&language=en-US&page=1
//get person
app.get("/api/person", function (req, res) {
  var id = req.query.id;

  console.log(id);
  var url = "https://api.themoviedb.org/3/person/"+ id +"?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  console.log("'/detail movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});


//https://api.themoviedb.org/3/person/550843/external_ids?api_key=97588ddc4a26e3091152 aa0c9a40de22&language=en-US&page=1
//get external
app.get("/api/external", function (req, res) {
  var id = req.query.id;

  console.log(id);
  var url = "https://api.themoviedb.org/3/person/"+ id +"/external_ids?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  console.log("'/detail movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});



// get review of tv or movie
app.get("/api/review", function (req, res) {
  //https://api.themoviedb.org/3/movie/464052/reviews?api_key=97588ddc4a26e3091152aa0c9 a40de22&language=en-US&page=1
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);
  //https://api.themoviedb.org/3/tv/<<tvshow_id>>/reviews?api_key=<<api_key>>&language= en-US&page=1
  var url = "https://api.themoviedb.org/3/"+ type +"/"+ id +"/reviews?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  //https://api.themoviedb.org/3/movie/<<movie_id>>/videos?api_key=<<api_key>>&languag e=en-US&page=1
  console.log("'/review movie call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});


//get recommended tv or movie
//https://api.themoviedb.org/3/movie/464052/recommendations?api_key=97588ddc4a26e309 1152aa0c9a40de22&language=en-US&page=1
app.get("/api/recommend", function (req, res) {
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);
  var url = "https://api.themoviedb.org/3/"+ type +"/"+ id +"/recommendations?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  //https://api.themoviedb.org/3/movie/<<movie_id>>/videos?api_key=<<api_key>>&languag e=en-US&page=1
  console.log("'/recommend call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});


//get similar tv or moviehttps://api.themoviedb.org/3/movie/464052/similar?api_key=97588ddc4a26e3091152aa0c9 a40de22&language=en-US&page=1
app.get("/api/similar", function (req, res) {
  var id = req.query.id;
  var type = req.query.type;
  console.log(id);
  console.log(type);
  var url = "https://api.themoviedb.org/3/"+ type +"/"+ id +"/similar?api_key=135b3d22e9e861ca6badb62a09db0df1&language=en-US&page=1";
  console.log(url);
  //this status call return detail
  //https://api.themoviedb.org/3/movie/<<movie_id>>/videos?api_key=<<api_key>>&languag e=en-US&page=1
  console.log("'/recommend call");
    axios.get(url)
    .then(response => res.json(response.data))
    .catch(err => res.send(err));

});


module.exports = app;


