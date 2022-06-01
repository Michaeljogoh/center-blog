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
    }
})

const comment  = mongoose.model('comment', commentSchema);
exports.modules = comment;