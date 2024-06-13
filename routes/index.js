const router = require('express').Router();
const apiRoutes = require('./api/nproutes');

router.use('/api', apiRoutes);

module.exports = router

