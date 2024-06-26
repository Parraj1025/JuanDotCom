const router = require('express').Router();
const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')

router.use('/api', postRoutes);
router.use('/api', userRoutes);
router.use(express.static(path.join(__dirname, 'public')))

router.get("/", (req,res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,"publix" , "index.html"))
    }
    catch (error) {
        res.send()
    }
})

module.exports = router

