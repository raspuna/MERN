const JokeController = require('../controllers/joke.controller');
module.exports = (app) => {
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes', JokeController.getJoke);
    app.get('/api/jokes/:id', JokeController.getJokeById);
    app.put('/api/jokes/:id', JokeController.updateJokeById)
    app.delete('/api/jokes/:id', JokeController.deleteJokeById)
}

