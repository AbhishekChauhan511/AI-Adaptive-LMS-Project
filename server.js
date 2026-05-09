const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express(); // Ye line missing thi aapke code mein!
const PORT = 5000;

app.use(bodyParser.json());

// 1. Database Connection
mongoose.connect('mongodb://localhost:27017/ai_lms_db')
    .then(() => console.log("✅ Successfully connected to MongoDB"))
    .catch(err => console.error("❌ Database connection error:", err));

// 2. User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String },
    learningLevel: { type: String, default: "Beginner" },
    score: { type: Number, default: 0 }
});
const User = mongoose.model('User', userSchema);

// 3. LOGIN ROUTE (Jo aap likh rahe the)
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid Email or Password!" });
        }

        res.json({ 
            message: "Login Successful!", 
            user: { name: user.name, level: user.learningLevel, score: user.score } 
        });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Auth Service running at http://localhost:${PORT}`);
});