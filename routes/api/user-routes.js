// The overall purpose of this code is to define an Express router that handles different routes related to users and their interactions in a web application. 
// The code imports the necessary dependencies, including the Express library, and the corresponding controller functions from the user-controller module.

const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router 
    .route('/:Id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
    
router 
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);
    

module.exports = router;    