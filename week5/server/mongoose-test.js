const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')

const Cat = mongoose.model('Cat', {name: String})
const lime = new Cat({name:'Lime'});
lime.save().then(
    ()=>console.log('meow')
).catch(
    (err)=>console.log(err)
)