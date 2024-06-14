const router = require ('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.post('/posts',(req,res) => {
    NewPost.create({
        username: req.body.username,
        post: req.body.post
    })
    .then((newPost) => {
        res.json(newPost)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
} )

module.exports = router