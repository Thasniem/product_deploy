const User = require('../model/user');

// GET all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// GET single user by userId
exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// ADD new user
exports.addNewUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// UPDATE user details
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { userId: req.params.userId },
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// DELETE user
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ userId: req.params.userId });
        if (!deletedUser) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({ msg: 'User deleted', deletedUser });
    } catch (err)        {
        res.status(500).json({ msg: err.message });
    }
};
