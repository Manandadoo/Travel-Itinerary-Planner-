import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).send("Username already exists.");
        }

        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send("User registered successfully.");
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('An error occurred while registering.');
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && user.password === password) {
            req.session.userId = user._id;
            res.status(200).send("Login successful.");
        } else {
            res.status(401).send("Incorrect username or password.");
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('An error occurred while logging in.');
    }
});

export default router;
