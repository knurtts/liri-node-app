# liri-node-app

- This app is a Language Interpretation and Recognition Interface (LIRI) program which will look up information about music, concerts, and movies

# Instructions

## Getting started
- You will first need to open the `liri.js` file in your console
- Every command which this app uses starts with the following terms: `node liri.js`
- In order to use Spotify within this app you will need a Spotify ID and a Spotify Secret Key
    - Get your spotify credentions [here](https://developer.spotify.com/my-applications/#!/login)
    - Once you have your ID and Secret Key, put them into a new file called `.env` within the same directory as `liri.js`
        - Paste the following into your `.env` file:
```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

## Finding songs or artists
- This feature can search for songs and/or artists using the spotify API
- After the inital commands, type 'spotify-this-song' and then the song or artist you are looking for
    - Following the "Preview" link will open your browser and show you a preview of the song

![screenshot of liri song command](images/spotifySong.jpg)

## Finding concerts
- This feature searches for the next upcoming show for touring artists using the Bands In Town API
    - Note that this will not work for artists who are not on tour
- To use this feature, type `concert-this` followed by the artist whose show you would like to see

![screenshot of Bands In Town command](images/concertSearch.jpg)

## Finding Movie Information
- This feature searches for movies using the OMDB API
- To use this feature, type `movie-this` followed by the movie you would like to know about

![screenshot of OMDB search command](images/OMDBsearch.jpg)