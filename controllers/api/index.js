const router = require('express').Router();

//require routes
const userRoutes = require('./user-routes.js');

//use routes
router.use('/user', userRoutes);

module.exports = router;