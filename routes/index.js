// The overall purpose of this code is to define an Express router that handles the top-level routes of a web application. 
// The code imports the necessary dependencies, including the Express library, and imports the apiRoutes module.

const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;