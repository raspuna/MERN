const express = require('express');
const cors = require('cors')
require('./config/mongoose.config');

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

require('./routes/authors.routes')(app);

app.listen(PORT, ()=>{ console.log(`Server is running on ${PORT}`)});