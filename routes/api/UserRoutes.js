const router = require('express').Router();
const sequelize = require('../../config/connection');
const Users = require('../../models/users');

router.get('/users', async (req, res) => {
    res.json(await Users.findAll())
})

router.post('/users', (req, res) => {
    Users.create({
        username: req.body.username,
        password: req.body.password
    })
        .then((newUser) => { res.json(newUser) })
        .catch((err) => { res.status(500).json(err) })

})

router.delete('/users/:username', async (req, res) => {
     try {
        const selectedUser = req.params.username;
        const deletedUser = await Users.destroy({
            where: {
                username: selectedUser
            }
        }
        )
        if (deletedUser) {
            res.json(`${selectedUser} has been deleted`)
        }
        else{
            res.json('User does not exist')
        }
     }
     catch (error) {
        console.error('doesnt work', error);
        res.status(123).json('db down')
     }
})


module.exports = router