const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// GET all users
router.get('/users', userController.getAllUsers);

// GET single user by ID
router.get('/users/:userId', userController.getSingleUser);

// ADD new user
router.post('/users', userController.addNewUser);

// UPDATE user details
router.put('/users/:userId', userController.updateUser);

// DELETE user
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
