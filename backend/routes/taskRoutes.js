import express from "express";
import { createTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);

// router.get("/", getTask);

// router.delete("/:id", deleteTask);

// router.update("/:id", updateTask);

export default router;