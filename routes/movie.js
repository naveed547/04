const movieRouter = require('express').Router();
const movieController = require('../controllers/movieController');
const isAuthenticated = require('../utils/isAuthenticated')
movieRouter.route('/:id')
    .get(isAuthenticated, movieController.getAMovie)
    .delete(movieController.deleteMovie)
    .put(movieController.updateMovie)

movieRouter.route('/')
    .get(isAuthenticated, movieController.getAllMovies)
    .post(isAuthenticated, movieController.createMovie);

module.exports = movieRouter;