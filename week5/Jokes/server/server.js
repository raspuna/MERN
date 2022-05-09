const express = require("express");
require('./config/mongoose.config')
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


require('./routes/joke.routes')(app);


app.listen(PORT, ()=> {console.log(`Server is running on ${PORT}`)})


