const router = require('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.get('/posts', async (req,res) => 
   res.json(await NewPost.findAll())
)

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

router.delete('/:id', async (req,res) => {
    const selectedID = req.params.id
    const affectedRows = await NewPost.destroy({
        where:{
            id: selectedID
        }
    })
    res.json({
        message: affectedRows > 0 ? `${affectedRows} posts have been deleted` : 'no posts deleted'
    })
})

router.put('/:id', async (req,res) => {
    const selectedID = req.params.id
    const affectedRows = await NewPost.update(req.body,{
        where: {
            id: selectedID
        }
    })
    res.json({message:'letsgo'})
})
    



module.exports = router