const router = require('express').Router();
const { error } = require('console');
const sequelize = require('../../config/connection');
const Users = require('../../models/users');
const { userInfo } = require('os');

router.get('/users', async (req, res) => {
    res.json(await Users.findAll())
})

router.post('/users', async (req, res) => {
   
    try {
        const newUser = req.body.username
        const newPassword = req.body.password
        const WelcomeUser = await Users.create({
            username: newUser,
            password: newPassword
        })
        if (!WelcomeUser) {
            res.json('nope')
        }
        else{
            res.json(`welcome ${newUser}`)
        }
    }

    catch (error) {
        res.status(500).json('wrong bur right', error)
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