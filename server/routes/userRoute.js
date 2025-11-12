import express from "express";
import { SignupUser, LoginUser, getAllUsers } from "../controllers/userController.js";



const router = express.Router();
router.post("/signup", SignupUser);
router.post("/login", LoginUser);
router.get("/users", getAllUsers);
export default router;
