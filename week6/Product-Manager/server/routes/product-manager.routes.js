const ProductController = require('../controllers/product-manager.controller');
module.exports = (app) => {
    app.get('/', ProductController.index);
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products', ProductController.getProduct)
}