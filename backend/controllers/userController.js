import User from '../models/userModel.js';
import mongoose from 'mongoose';

export const createUser = async (req, res) => {
    const user = req.body;

    if(!user.name || !user.role || !user.position || !user.email || !user.password) {
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: "Successfully created a user"});
    } catch (error) {
        console.error("Error in creating a user", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users});
    } catch (error) {
        console.log("error in fetching users", error.message);
        res.status(500).json({sucess: false, message: "Server Error"});
    }
}

export const deleteUsers = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "User not found"});
    }

    try {
        await User.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "User Deleted" });
    } catch (error) {
        console.log("error in deleting user", error.message);
        res.status(500).json({ success: false, mesasge: "server error"});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User not found"});
    }

    try {
        await User.findByIdAndUpdate(id, user, {new: true});
        res.status(200).json({ success: true, message: "Updated user"});
    } catch (error) {
        res.status(500).json({ success: false, message: "server error"});
    }
}