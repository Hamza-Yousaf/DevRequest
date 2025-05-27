import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/userModel.js';
import Task from './models/taskModel.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/users", async (req, res) => {
    const user = req.body;

    if(!user.name || !user.role || !user.position || !user.email) {
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: "Successfully created a user"});
    } catch (error) {
        console.error("Error is creating a user", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});

