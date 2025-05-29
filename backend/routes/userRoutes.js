import express from 'express';
import { createUser, getUsers, deleteUsers, updateUser, verifyUser} from '../controllers/userController.js';

const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.delete("/:id", deleteUsers);

router.put("/:id", updateUser);

router.post("/login", verifyUser);

export default router;