const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, 'nwgfucweiiwye87rwyw8rc2b438rynciuger87237tyr879cy2384r7t234782ybrci762grybc2ir723478', {
        expiresIn: "7d",
    });
};

exports.register = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        user = new User({ fullName, email, password, role });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user);
        res.json({ token, user: { id: user._id, fullName: user.fullName, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
