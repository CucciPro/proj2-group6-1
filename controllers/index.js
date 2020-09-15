const router = require('express').Router();

//require routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const plantRoutes = require('./plant-routes');
const speciesRoutes = require('./species-routes');

//use routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', plantRoutes);
router.use('/', speciesRoutes);



module.exports = router;