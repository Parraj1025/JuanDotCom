const router = require('express').router();
const sequelize = require('../../config/connection');
const Users = require('../../models/users');

router.post('/user', (req,res) => {
    Users.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((newUser) => {res.json(newUser)})
    .catch((err) => {res.status(500).json(err)})
})

router.get('/user', async (req,res) => {
    res.json(await Users.findAll())
})

module.exports = router