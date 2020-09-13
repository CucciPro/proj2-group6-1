const router = require('express').Router();

//require routes
const userRoutes = require('./user-routes.js');

const imageRoutes = require('./image-routes.js');
//use routes
router.use('/user', userRoutes);

router.use('/images',imageRoutes );

module.exports = router;