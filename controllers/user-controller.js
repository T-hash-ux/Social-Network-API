// Set up the user controller to encapsulate the functions relation to the user operations
const { User } = require('../models');

const userController = {

    getAllUser(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
           
            .select('-__v')
            .then(dbUserData => {

                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(404).json(err);
            });
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with that id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res. status(400).json(err));
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with thid id' });
                    return;
                
                }
                res.json(dbUserData);

                })
                .catch(err => res.status(400).json(err));
            },

            addFriend({ params }, res) {
                console.log(params.userId);
                console.log(params.friendId);
                User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { friends: params.friendId } },
                    { new: true }
                )
                    .then(dbUserData => {
                        if (!dbUserData) {
                            res.status(404).json({ message: 'No user found with this id!' });
                            return;
                        }
                        res.json(dbUserData);
                    })
                    .catch(err => res.json(err));
            },


            deleteFriend({ params }, res) {
                User.findOneAndUpdate(
                    { _id: params.userId }, 
                    { $pull: { friends: params.friendId } },
                    { new: true }

                )
                    .then(dbUserData => res.json(dbUserData))
                    .catch(err => res.json(err));
                
                
            }

    };

    module.exports = userController;
