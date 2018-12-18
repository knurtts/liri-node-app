require("dotenv").config();

var Spotify = require("./keys");

var spotify = new Spotify(spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search == "concert-this") {
    console.log("find"+term+"in Bands in Town API");

    console.log("log the Venue Name, Location, date of event MM/DD/YYYY");   

} else if (search == "spotify-this-song") {
    console.log(`Use Spotify API to log 
    Artist(s), 
    Song name, 
    spotify preview link for song,
    Album`);

    console.log("if nothing is found default to The Sign by Ace of Base");

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