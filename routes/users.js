const express = require('express');
const app = express();
const router = express.Router();
const post = require('../model/post');
const comment = require('../model/comment');



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
})

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

// FGet All Comment
router.get('/post', (req, res)=>{
    post.find({}, (err, posts)=>{
    if(err){
        res.send('Nothing was fetched')
        next();
    }
    res.json(posts)
    });
});
// Get All Comment

// Get Post By id
router.get('/post/:id', (req, res)=>{
    post.findById(req.params.id)
    .then(data =>{
        res.json(data)
    }).catch(error =>{
        res.json(error)
    });
});

router.post('/postName', async (req, res)=>{
    let {name}= req.body
    let {title} = req.body;
    let {author} = req.body;
    console.log(name);
    console.log(title);
    console.log(author)
})

module.exports = router;