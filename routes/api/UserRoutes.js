const bcrypt = require('bcryptjs')
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
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(500).json('maaaaan')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await Users.create({
        username,
        password: hashedPassword
    })

    if (newUser) {
        res.status(200).json(`${username} has been added`)
    }
    else {
        res.status(500).json('not possible to create user')
    }}
    catch (error) {
        res.status(500).json('broken')    }
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