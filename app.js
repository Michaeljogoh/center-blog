const express = require("express");
const app = express();
const mongoose = require('mongoose');


// import MongoURI 
const DB = require('./config/key').MongoURI;

// connecting to mongodb database
mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true , useUnifiedTopology:true})
.then(()=> console.log('MongoDB Connected!!!'))
.catch(err => console.log(err));



// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


// server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});