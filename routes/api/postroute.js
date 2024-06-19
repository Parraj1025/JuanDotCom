
const router = require('express').Router();

const sequelize = require('../../config/connection')
//import the model
const NewPost = require('../../models/posts');

router.get('/posts', async (req, res) =>
    res.json(await NewPost.findAll())
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

router.delete('/:id', async (req, res) => {
    const selectedID = req.params.id
    const affectedRows = await NewPost.destroy({
        where: {
            id: selectedID
        }
    })
    res.json({
        message: affectedRows > 0 ? `${affectedRows} posts have been deleted` : 'no posts deleted'
    })
})

router.put('/:id', async (req, res) => {
    const selectedID = req.params.id
    const affectedRows = await NewPost.update(req.body, {
        where: {
            id: selectedID
        }
    })
    res.json({ message: 'letsgo' })
})




module.exports = router