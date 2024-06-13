const router = require ('express').Router();

const { Model, Datatypes } = require('sequelize');
const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.post('/post',(req,res) => {
    NewPost.create({
        id: Datatypes.INTEGER,
        username: Datatypes.STRING,
        post: Datatypes.STRING
    })
    .then((newPost) => {
        res.json(newPost)
    })
    .catch((err) => {
        res.json(err)
    })
} )

module.exports = NewPost