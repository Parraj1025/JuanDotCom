const router = require('express').router();
const sequelize = require('../../config/connection');
const User = require('../../models/users');

router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((newUser) => {res.json(newUser)})
    .catch((err) => {res.status(500).json(err)})
})

router.get('/', async (req,res) => {
    res.json(await User.findAll())
})

module.exports = router