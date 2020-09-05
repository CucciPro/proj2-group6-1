const router = require('express').Router();

//require routes
const apiRoutes = require('./api/');

//use routes
router.use('/api', apiRoutes);

module.exports = router;