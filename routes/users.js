const express = require('express');
const app = express();
const router = express.Router();
const post = require('../model/post');
const comment = require('../model/comment');


// FGet All Post
router.get('/post', (req, res)=>{
    post.find({}, (err, posts)=>{
    if(err){
        res.send('Nothing was fetched')
        next();
    }
    res.json(posts)
    });
});


//  Route for creating a blog;
router.post('/post', (req, res)=>{
    let title = req.body.title;
        let body = req.body.body;
        let author = req.body.author;
        const postUser = new post ({title, body , author});
    postUser.save()
    .then(data =>{
    res.json(data)
    })
    .catch(error =>{
res.json(error)
    })
});


// Get All Comment
router.get('/comment', (req, res)=>{
    comment.find({}, (err, posts)=>{
    if(err){
        res.send('Nothing was fetched')
        next();
    }
    res.json(posts)
    });
});


// Route for creating a comment
router.post('/comment', (req, res)=>{
    let body = req.body.body;
    let author = req.body.author;
    const commentUser = new comment ({body , author});
    // Saving comment 
    commentUser.save()
    .then(data =>{
    res.json(data)
    })
    .catch(error =>{
    res.json(error)
    })
   

});



// Get Post By id
router.get('/post/:id', (req, res)=>{
    post.findById(req.params.id)
    .then(data =>{
        res.json(data)
    }).catch(error =>{
        res.json(error)
    });
});



module.exports = router;