const jwt = require("jsonwebtoken");
require("dotenv").config();

const protect = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), 'nwgfucweiiwye87rwyw8rc2b438rynciuger87237tyr879cy2384r7t234782ybrci762grybc2ir723478');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only" });
    }
    next();
};

module.exports = { protect, adminOnly };
