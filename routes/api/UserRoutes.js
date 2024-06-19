const router = require('express').Router();
const { error } = require('console');
const sequelize = require('../../config/connection');
const Users = require('../../models/users');

router.get('/users', async (req, res) => {
    res.json(await Users.findAll())
})

router.post('/users', (req, res) => {
    try {
        if (req.body.password == null) {
            res.json(`password cant be empty`)
        }
        else {
            Users.create({
                username: req.body.username,
                password: req.body.password
            })
            res.json(`${username} has been added`)
        }



    }
    catch (error) {
        res.status(500).json('wrong bur right',error)
    }
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
        else {
            res.json('User does not exist')
        }
    }
    catch (error) {
        console.error('doesnt work', error);
        res.status(123).json('db down')
    }
})


module.exports = router