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
        return res.status(500).json('you need both.....dont be lazy')
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

router.put('/users', async (req,res) => {
    try {
    const {username , newPassword} = req.body

    if(!username || !newPassword) [
        res.status(200).json('nothing to update')
    ]

    const hashedPassword = bcrypt.hash(newPassword,10)
    
    Users.update({password: await hashedPassword},{
        where: {
            username: username
        }
    }).then(res.status(200).json('password changed'))
}
catch{
    res.status(500).json('broke it')
}
})

router.post('/users/login', async (req,res) =>{
    const {username, password} = req.body;
    const userdata = await Users.findOne({
        where: {
            username,
        }
    })

    if (!userdata) return res.json(`username/password not found`);
    else res.json('hi')
})

module.exports = router