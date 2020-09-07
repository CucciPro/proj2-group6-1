const router = require('express').Router();

//require routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

//use routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;