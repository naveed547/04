const movieQuery = require('../query/movieQuery')

const movieController = {
    getAMovie: function(req, res) {
        const movieId = req.params.id

    },
    deleteMovie: function(req, res) {
        const movieId = req.params.id;

    },
    updateMovie: function(req, res) {
        const movieId = req.params.id;
    },
    getAllMovies: function(req, res) {
        movieQuery.getAllMovies()
            .then(docs => res.status(200).json(docs))
            .catch(error => res.status(500).json(error));
    },
    createMovie: function(req, res) {
        const movieDocToSave = req.body;
        movieQuery.createMovie(movieDocToSave)
            .then((doc) => {
                res.status(201).json(doc);
            }).catch(error => res.status(500).json(error));
        
        
    }
}

module.exports = movieController;