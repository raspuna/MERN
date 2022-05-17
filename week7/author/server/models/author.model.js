const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [
                true,
                "name is required"
            ],
            minLength: [3, 'Too short name']
        }
    },
    {
        timestamps:true
    });
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;