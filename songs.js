const axios = require("axios");
const spotify = require("node-spotify-api");

var songs = function() {
    this.id = id;
    this.secret = secret;
    this.findSongs = function() {
       spotify.search({ type: 'track', query: 'All the Small Things' })
        .then(function(response) {
        console.log(response);
    })
        .catch(function(err) {
        console.log(err);
    });
    }
};

songs.findSongs();


// var spotify = new Spotify({
//     id: "542abec1e62e4908b5b2aa6f313c1477",
//     secret: "7d6067c80f5a4e9f8a0c62b0b0fa18a2"
//   });

