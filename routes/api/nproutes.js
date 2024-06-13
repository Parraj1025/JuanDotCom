const router = require ('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.post('/posts',(req,res) => {
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

module.exports = NewPos,t