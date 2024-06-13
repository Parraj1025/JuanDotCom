const router = require ('express').Router();

const { Module } = require('module');
//import the model
const NewPost = require('../../models/posts');

router.post('/post',(req,res) => {
    NewPost.create({
        id: 1,
        username: 'juan',
        post: 'parra'
    })
    .then((newPost) => {
        res.json(newPost)
    })
    .catch((err) => {
        res.json(err)
    })
} )

module.exports = NewPost