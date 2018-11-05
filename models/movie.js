let mongoose = require('mongoose');

// define the movieSchema model schema
let MovieSchema = mongoose.Schema;
const movie = new MovieSchema({
    title: String,
    poster: String,
    voteCount: Number,
    voteAverage: Number,
    releaseDate: String,
    overview: String
});
module.exports = mongoose.model('movie', movie);
