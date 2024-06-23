const bcrypt = require('bcryptjs')
const router = require('express').Router();
const { error } = require('console');
const sequelize = require('../../config/connection');
const Users = require('../../models/users');
const { userInfo } = require('os');

//route to grab users from database

router.get('/users', async (req, res) => {
    res.json(await Users.findAll())
})

//rpute to create a new username, checking for existing user and encrypting password

router.post('/users', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(500).json('you need both.....dont be lazy')
        }
        const existingUser = await Users.findOne({
            where: {
                username
            }
        })

        if (existingUser) {
            res.status(200).json('user already exists')
        }

        const newUser = await Users.create({
            username,
            password
        })


        if (newUser) {
            res.status(200).json(`${username} has been added`)
        }
        else {
            res.status(500).json('not possible to create user')
        }
    }
    catch (error) {
        res.status(500).json('broken')
    }
}

)

//route to delete users


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

//route to update user passwords

router.put('/users', async (req, res) => {
    try {
        const { username, currentPassword, newPassword } = req.body;

        if (!username || !currentPassword || !newPassword) {
            res.json('fill out all fields')
        }

        const existingUser = await Users.findOne({
            where: {
                username:username
            }
        })

        console.log(existingUser)

        if (!existingUser) {
            res.status(200).json('user does not exist')
        }

        const validPassword = await bcrypt.compare(currentPassword,existingUser.password);

        if (!validPassword) {
            res.json('existing password invalid')
        }

        const updatedUser = await Users.update({password: newPassword},{
            where: {
                username:username
            }
        })

        if (!updatedUser) {
            res.status(200).json("password not updated changed")
        }
        else{res.json('pass changed')}
    }
    catch {
        res.status(500).json('broke it')
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userdata = await Users.findOne({
            where: {
                username,
            }
        })

        if (!userdata) return res.status(200).json(`no user found`);

        const isValidPassWord = await bcrypt.compare(password, userdata.password);
        isValidPassWord ? res.status(200).json(`${username}....welcome back`) : res.status(500).json('incorrect log in credentials')


    }
    catch (error) {
        res.status(500).json('no info entered')
    }
})

module.exports = router