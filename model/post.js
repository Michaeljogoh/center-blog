const mongoose = require('mongoose');

// Creating Schema for users post
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
});

const post = mongoose.model('post', postSchema);
module.exports = post;

