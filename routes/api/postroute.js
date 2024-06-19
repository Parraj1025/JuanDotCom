
const router = require('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.get('/posts', async (req, res) => {
    try{
       const allPosts = await NewPost.findAll()

       if (!allPosts){
        res.status(500).json('unable posts to load')
       }
       else {
        res.status(200).json(allPosts)
       }
    }
    catch (error){
        res.status(500).json('broke it')
    }
}
)

router.post('/posts', async (req, res) => {
    try {
        const { username, post } = req.body

        if (!username || !post) {
            return res.json('you neeeed both')
        }

        const newPost = await NewPost.create({
            username,
            post
        })

        if (newPost) {
            res.status(200).json('Thank you for posting')
        }

        else {
            res.status(500).json('could not create post')
        }
    }
    catch (error) {
        res.status(500).json('broke it')
    }

})

router.delete('/posts', async (req, res) => {
    try {
        const { id } = req.body

        if (!id) {
            return res.status(500).json('no post selected')
        }

        const deletedPost = await NewPost.destroy({
            where: {
                id: id
            }
        })

        if (deletedPost) {
            res.status(200).json('post has been deleted')
        }
        else {
            res.json('unable to delete post')
        }
    }
    catch (error) {
        res.status(500).json('broke it...')
    }
})

router.put('/posts', async (req, res) => {
    try{
        const {id,post} = req.body
        if (!id || !post) {
            res.status(500).json('cant delete if you dont pick a post and update it')
        }

        NewPost.update({post},{
            where: {
                id: id,
            }
        }).then(res.status(200).json('post updated'))
    }
    catch (error) {
        res.status(500).json('broke it')
    }

})




module.exports = router