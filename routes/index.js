const router = require('express').Router();
const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes')

router.use('/api', postRoutes);
router.use('/api', userRoutes)

module.exports = router

