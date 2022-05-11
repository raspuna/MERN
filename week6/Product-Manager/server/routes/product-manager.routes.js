const ProductController = require('../controllers/product-manager.controller');
module.exports = (app) => {
    app.get('/', ProductController.index);
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products', ProductController.getProducts)
    app.get('/api/product/:id', ProductController.getProduct)
    app.put('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}