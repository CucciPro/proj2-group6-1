const router = require('express').Router();

//require routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const plantRoutes = require('./plant-routes');
const speciesRoutes = require('./species-routes');
const historyRoutes = require('./history-routes');

//use routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', plantRoutes);
router.use('/', speciesRoutes);
router.use('/', historyRoutes);



module.exports = router;