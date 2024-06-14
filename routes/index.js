const router = require('express').Router();
const apiRoutes = require('./api/postroute');

router.use('/api', apiRoutes);

module.exports = router

