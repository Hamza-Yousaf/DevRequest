import Task from '../models/taskModel.js';
import mongoose from 'mongoose';

export const createTask = async (req, res) => {
    const task = req.body;

    if(!task.title || !task.description || !task.priority || !task.deadline || !task.roles || !task.author || task.roles.length === 0) {
        return res.status(400).json({ success: false, message: "Please provide all fields "})
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({ success: true, message: "Successfully created a task"});
    } catch (error) {
        console.error("Error in creating a task", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
};