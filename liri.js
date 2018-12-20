require("dotenv").config();
var axios = require("axios");
const Spotify = require("node-spotify-api");
const fs = require("fs");
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search == "concert-this") {
    console.log("find"+term+"in Bands in Town API");

    console.log("log the Venue Name, Location, date of event MM/DD/YYYY");   

} else if (search == "spotify-this-song") {
    // if nothing is found default to The Sign by Ace of Base

    function doTheSpotify(term) {spotify.search({
        type: 'track', 
        query: term
    }).then(function(response) {

        var track = response.tracks.items[0];

        if (track == null) {
            term = "The Sign Ace of Base"; 
            doTheSpotify(term);
            // console.log("Alt track");
        } else {
            
        var infoLog = `------------
Artist: ${track.album.artists[0].name}
Album: ${track.album.name}
Track Name: ${track.name}
Preview: ${track.preview_url}
------------`;
                
            fs.appendFile("log.txt", infoLog, function(err){
                if (err) {
                    return console.log(err);
                }        
                console.log(infoLog);        
                });
        }
    }).catch(function(err) {
    console.log(err);
    });
    };

    doTheSpotify(term);

} else if (search == "movie-this") {
    console.log(`Use OMDB app to log
    Title of movie
    Year
    IMDB Rating
    Rotten Tomatoes Rating
    Country of production
    Language
    Plot
    Cast
    `);

    console.log("If no movie is found, output data for Mr. Nobody.");   

} else if (search == "do-what-it-says") {
    //Use what is written in random.txt to pull song info via Spotify
    console.log("Find song from random.txt");

} else {
    console.log("-------------------");

    console.log("Sorry. I didn't understand that.");

    console.log("Make sure to use all lower case letters.");

    console.log("Please try again.");
};



// "artists": [
//     {
//       "external_urls": {
//         "spotify": "https://open.spotify.com/artist/1FQ6uth7icR6Jhla16K2vC"
//       },
//       "href": "https://api.spotify.com/v1/artists/1FQ6uth7icR6Jhla16K2vC",
//       "id": "1FQ6uth7icR6Jhla16K2vC",
//       "name": "The Faceless",
//       "type": "artist",
//       "uri": "spotify:artist:1FQ6uth7icR6Jhla16K2vC"
//     }
//   ]