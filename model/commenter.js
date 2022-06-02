const mongoose = require('mongoose');

// Creating Schema for users post
const commenterSchema = new mongoose.Schema({
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
    },
    date:{
        type: Date,
        default:Date.now
    }
});

const commenter = mongoose.model('commenter', commenterSchema);
module.exports = commenter;

