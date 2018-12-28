require("dotenv").config();
var axios = require("axios");
const Spotify = require("node-spotify-api");
const fs = require("fs");
var keys = require("./keys");
const moment = require("moment");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search == "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
        .then(function (res) {

            var showData = res.data[0];
            if (!showData) {
                console.log("---------------");
                console.log("Sorry, I couldn't find anything. This artist may not be on tour.");
                console.log("---------------");
            } else {
                var showTime = moment(showData.datetime).calendar();

                var displayData = `---------------
Venue: ${showData.venue.name}
Location: ${showData.venue.city}, ${showData.venue.region} ${showData.venue.country}
Date: ${showTime}
---------------`;

                console.log("Here is the next show that " + term + " is playing:");
                console.log(displayData);
            };
        });

} else if (search == "spotify-this-song") {

    doTheSpotify(term);

} else if (search == "movie-this") {

    function doTheMovie(term) {
        var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
        axios.get(URL).then(
            function (response) {                
                if (response.data.Response == "False") {
                    term = "Mr. Nobody";
                    doTheMovie(term);
                } else {
                var movie = response.data;
                var imdb = movie.Ratings[0];
                var rotten = movie.Ratings[1];
                var showMovie = `---------------
Title: ${movie.Title}
Year: ${movie.Year}
IMDB Rating: ${imdb.Value}
Rotten Tomatoes Score: ${rotten.Value}
Country: ${movie.Country}
Language: ${movie.Language}
Plot: ${movie.Plot}
Cast: ${movie.Actors}
---------------`;
                console.log(showMovie);
                };
            }
        )
    };

    doTheMovie(term);

} else if (search == "do-what-it-says") {

    console.log("Find song from random.txt");
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(" ");
        term = dataArr[1];
        doTheSpotify(term);
        
    });

} else {
    console.log("-------------------");

    console.log("Sorry. I didn't understand that.");

    console.log("Make sure to use all lower case letters.");

    console.log("Please try again.");
};

function doTheSpotify(term) {
    spotify.search({
        type: 'track',
        query: term
    }).then(function (response) {

        var track = response.tracks.items[0];

        if (track == null) {
            term = "The Sign Ace of Base";
            doTheSpotify(term);
        } else {

            var infoLog = `------------
Artist: ${track.album.artists[0].name}
Album: ${track.album.name}
Track Name: ${track.name}
Preview: ${track.preview_url}
------------`;

            fs.appendFile("log.txt", infoLog, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(infoLog);
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
};