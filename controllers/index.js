const router = require('express').Router();
const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')

const app = express()

router.use('/api', postRoutes);
router.use('/api', userRoutes)
app.use(express.static(path.join(__dirname, 'public')))

router.get("/", (req,res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
    catch (error) {
        res.send('nope')
    }
})

module.exports = router

