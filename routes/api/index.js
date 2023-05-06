// The overall purpose of this code is to define an Express router that handles different routes for a web application. 
// The code imports the necessary dependencies, including the Express library, and two sets of routes: userRoutes and thoughtRoutes.

const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;