const express = require('express');
const app = express();
const router = express.Router();
const comment = require('../model/comment');
const post = require('../model/post');


//Route for blogs
router.get("/post", (req,res)=>{
    res.send('Post for blogs')
  }) 



//  Route for creating a blog;
router.post('/post', (req, res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let author = req.body.author;
    const post = new post ({title, body , author});
    // Saving post
    post.save((err)=>{
        if(err){
            console.log(err + 'Post was not saved');
        } else {
            console.log('Post was saved')
        }
    })
    res.resdirect('/')
});
// Route for getting a post by id
router.get('/post/:id', (req, res)=>{
     let requestedPost = req.params.id
     res.render({
         post: title,
         post: body,
         post: author,
    });
});

// Route for creating a comment
router.post('/comment', (req, res)=>{
    let body = req.body.body;
    let author = req.body.author;
    const comment = new comment ({body , author, data});
    // Saving comment 
    comment.save(function(err){
        if(err){
            console.log(err + 'Comment was not saved')
        } else {
            console.log('Comment was Saved')
        }
    })
    res.resdirect('/')

});




module.exports = router;