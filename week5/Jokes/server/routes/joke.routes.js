const JokeController = require('../controllers/joke.controller')
module.exports = (app) => {
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes', JokeController.getJoke);
}

