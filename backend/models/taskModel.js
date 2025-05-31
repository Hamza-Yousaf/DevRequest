import mongoose from "mongoose";

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
        type: String,
        required: true
    },
    positions: {
        type: [String]
    },
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;