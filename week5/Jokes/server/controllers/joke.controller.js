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
const getJokeById = (req,res)=>{
    Joke.findOne({ _id: req.params.id })
    .then((joke)=>{
        res.status(200).json(joke);
    })
    .catch((err)=>{
        res.status(500).json({err});
    });
}
const updateJokeById = (req,res)=>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body,
        {new:true, runValidators:true})
    .then((jokes)=>{
        res.status(200).json(jokes);
    })
    .catch((err)=>{
        res.status(500).json({err});
    });
}
const deleteJokeById = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.status(200).json({result: result});
    })
    .catch((err)=>{
        res.status(500).json({err});
    });
}


module.exports = {
    createJoke,
    getJoke,
    getJokeById,
    updateJokeById,
    deleteJokeById
}