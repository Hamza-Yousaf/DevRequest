import mongoose from "mongoose";
import User from '../models/userModel.js'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;