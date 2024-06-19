const router = require('express').Router();
const { error } = require('console');
const sequelize = require('../../config/connection');
const Users = require('../../models/users');
const { userInfo } = require('os');

router.get('/users', async (req, res) => {
    res.json(await Users.findAll())
})

router.post('/users', (req, res) => {
    if (req.params.username && req.params.password) {
        Users.create({
            username: req.body.username,
            password: req.body.password
        
        })
        res.json(`${username} has been added`)
    }
    else{
        res.status(500).json('nope')
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