const Author = require('../models/author.model')
const index = (req, res) => {
    res.status(200).json({ 
        message:"WELCOME"
    });
}
const createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {
        res.status(201).json({newAuthor})
    }).catch(err => {
        res.status(500).json({err});
        console.log(err);
    });
}
const getAuthors = (req, res) => {
    Author.find({})
    .then((authors) => {
        res.status(200).json({authors})
    }).catch(err => {
        res.status(500).json({err});
        console.log(err);
    });
}
const getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
    .then(author => res.status(200).json(author))
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((author) => res.status(200).json(author))
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}
const deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id:req.params.id})
    .then((result) => {res.status(200).json({result: result})})
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}
module.exports = {
    index,
    createAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
}