const movieModel = require('../models/movie')

const movieQuery = {
    createMovie: function (movieDocToSave) {
        const movie = new movieModel();
        movie.title = movieDocToSave.title;
        movie.poster = movieDocToSave.poster_path;
        movie.voteCount = movieDocToSave.vote_count;
        movie.voteAverage = movieDocToSave.vote_average;
        movie.releaseDate = movieDocToSave.release_date;
        movie.overview = movieDocToSave.overview;

        return movie.save(movieDocToSave)
    },
    getAllMovies: function () {
        return movieModel.find({});
    }
}

module.exports = movieQuery;