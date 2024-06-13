const router = require ('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.post('/',(req,res) => {
   const posted = new NewPost(req.body.username, req.body.post)
    res.send(posted)
})

module.exports = NewPost