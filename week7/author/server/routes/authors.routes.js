const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.get('/', AuthorController.index);
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.getAuthors)
    app.get('/api/author/:id', AuthorController.getAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}