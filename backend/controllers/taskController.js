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

export const getTasks = async (req, res) => {
  try {
    const { roles, positions, status, general } = req.query;
    const filter = {};

    if (roles) {
      filter.roles = { $elemMatch: { $regex: new RegExp(`^${roles}$`, 'i') } };
    }

    if (positions) {
      filter.positions = { $elemMatch: { $regex: new RegExp(`^${positions}$`, 'i') } };
    }

    if (status) {
      filter.status = new RegExp(`^${status}$`, 'i');
    }

    let tasks = await Task.find(filter);

    if (general === "Newest") {
        tasks = tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (general === "Deadline") {
        tasks = tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    } else if (general === "Priority") {
        const sorter = {
            High: 3,
            Medium: 2,
            Low: 1
        };
      tasks = tasks.sort((a, b) => sorter[b.priority] - sorter[a.priority]);
    }

    return res.status(200).json({ success: true, data: tasks });

  } catch (error) {
    console.log("error in fetching tasks", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const deleteTask = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Task not found"});
    }

    try {
        await Task.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Successfully deleted task"});
    } catch (error) {
        console.log("error in deleting task", error.message);
        res.status(500).json({ success: false, mesasge: "server error"});
    }
};

export const updateTask = async (req, res) => {
    const {id} = req.params;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Task not found"});
    }

    try {
        await Task.findByIdAndUpdate(id, task, {new:true});
        return res.status(200).json({ success: true, message: "Successfully updated task"});
    } catch (error) {
        console.log("error in updating task", error.message);
        res.status(500).json({ success: false, mesasge: "server error"});
    }
}