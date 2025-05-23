const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST: Create new user profile
router.post('/', async (req, res) => {
  const { name, email, bio, skills, avatar } = req.body;
  try {
    const newUser = new User({ name, email, bio, skills, avatar });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
