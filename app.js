const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

// import MongoURI 
const DB = require('./config/key').MongoURI;

// connecting to mongodb database
mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true , useUnifiedTopology:true})
.then(()=> console.log('MongoDB Connected!!!'))
.catch(err => console.log(err));

// bodyparser
app.use(express.json());
app.use(cors());

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


// server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});