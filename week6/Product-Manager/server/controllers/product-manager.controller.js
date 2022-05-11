const Product = require('../models/product.model')
const index = (req, res) => {
    res.status(200).json({ 
        message:"WELCOME"
    });
}
const createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.status(201).json({newProduct})
    }).catch(err => {
        res.status(500).json({err});
        console.log(err);
    });
}
const getProducts = (req, res) => {
    Product.find({})
    .then((products) => {
        res.status(200).json({products})
    }).catch(err => {
        res.status(500).json({err});
        console.log(err);
    });
}
const getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.status(200).json(product))
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((product) => res.status(200).json(product))
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}
const deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id:req.params.id})
    .then((result) => {res.status(200).json({result: result})})
    .catch(err => {
        res.status(500).json({err});
        console.log(err);
    })
}
module.exports = {
    index,
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}