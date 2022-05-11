const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/product-manager"
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=> console.log('Connected to MongoDB')
).catch(
    err => console.log('Database connection error:', err)
);