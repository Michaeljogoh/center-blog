const mongoose = require('mongoose');

// creating comment for users to connect to posts
const commentSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true
    },

    author:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
})

const comment  = mongoose.model('comment', commentSchema);
module.exports = comment;