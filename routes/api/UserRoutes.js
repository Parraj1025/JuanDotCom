const router = require('express').Router();
const sequelize = require('../../config/connection');
const Users = require('../../models/users');

router.get('/users', async (req,res) => {
    res.json(await Users.findAll())
})

router.post('/users', (req,res) => {
    Users.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((newUser) => {res.json(newUser)})
    .catch((err) => {res.status(500).json(err)})
})

router.delete('/users/:selectedUser',(req,res) => {
    const selectedUser = req.params.body;
    const affectedRows = Users.destroy({
        where: {
            username: selectedUser
        }
    })
    res.json('yes')
})



module.exports = router