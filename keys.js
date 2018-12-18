console.log('this is loaded');

var Spotify = function(){
  this.keys = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  }
};

module.exports = Spotify;