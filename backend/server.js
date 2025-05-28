import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.post("/api/tasks", async (req, res) => {
    const task = req.body;

    if (!req.body.title || !req.body.description || !req.body.priority || !req.body.deadline || !req.body.roles || !req.body.author) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({ success: true, message: "Successfully created a task"});
    } catch (error) {
        console.error("Error in creating a task", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});


