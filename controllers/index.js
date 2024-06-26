const router = require('express').Router();
const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')

router.use('/api', postRoutes);
router.use('/api', userRoutes)

router.get("/", (req,res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,"../public/views"))
    }
    catch (error) {
        res.send()
    }
})

module.exports = router

