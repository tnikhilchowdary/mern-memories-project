import express from "express";
import { SignupUser, LoginUser } from "../controllers/userController.js";


const router = express.Router();
router.post("/signup", SignupUser);
router.post("/login", LoginUser);

export default router;
