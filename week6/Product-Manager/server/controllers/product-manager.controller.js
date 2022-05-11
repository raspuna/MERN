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
const getProduct = (req, res) => {
    Product.find({})
    .then((products) => {
        res.status(200).json({products})
    }).catch(err => {
        res.status(500).json({err});
        console.log(err);
    });
}
module.exports = {
    index,
    createProduct,
    getProduct
}