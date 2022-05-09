const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/jokes"
mongoose.connect(mongoURI, {
    useNewUrlParser:true, 
    useUnifiedTopology:true
    }).then(
        () => console.log('Connected to MongoDB')
    ).catch(
        err => console.log('database connection error:', err)
    );