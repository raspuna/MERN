const express = require("express");

const app = express();
const PORT = 8000;
const mongoURI = "mongodb://localhost:27017/jokes"
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const JokeSchema = mongoose.Schema(
    {
        setup:String,
        punchline:String,
    },
    {
        timestamp: true,
    });
const Joke = mongoose.model('Joke', JokeSchema);

app.post("/api/jokes", (req, res)=>{
    Joke.create(req.body)
    .then((newJoke)=>{
        res.status(201).json({newJoke});
    })
    .catch((err)=>{
        res.status(500).json({err});
        console.log(err);
    });
});
app.get("/api/jokes", (req,res)=>{
    Joke.find({})
    .then((jokes)=>{
        res.status(200).json(jokes);
    })
    .catch((err)=>{
        res.status(500).json({err});
    });
})

app.listen(PORT, ()=> {console.log(`Server is running on ${PORT}`)})


