const router = require ('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.get('/posts', async (req,res) => 
   res.json(await NewPost.findAll())
)

router.get('/posts:id',async (req,res) => {
   const requestedpost = await NewPost.findByPk(req.body.id)
   res.json(requestedpost)
})

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

router.delete('/posts:id', async (req,res) => {
    const selectedID = req.body.id
    const affectedRows = await NewPost.destroy({
        where:{
            id: selectedID
        }
    })
    res.json({
        message: affectedRows > 0 ? `${affectedRows} posts have been deleted` : 'no posts deleted'
    })
})

router.put('/posts', async (req,res) => {
    const selectedPost = req.body.id
    const affectedRows = await NewPost.update({
        where: {
            id: selectedPost
        }
    })
    res.json({
        message: affectedRows > 0 ? `${affectedRows}` : "nothing has changed"
    })
})
    



module.exports = router