const Joke = require('../models/joke.model');
const createJoke = (req, res)=>{
    Joke.create(req.body)
    .then((newJoke)=>{
        res.status(201).json({newJoke});
    })
    .catch((err)=>{
        res.status(500).json({err});
        console.log(err);
    });
};
const getJoke = (req,res)=>{
    Joke.find({})
    .then((jokes)=>{
        res.status(200).json(jokes);
    })
    .catch((err)=>{
        res.status(500).json({err});
    });
}

module.exports = {
    createJoke,
    getJoke
}