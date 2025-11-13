import express from "express";
import {getMemory, createMemory, updateData} from "../controllers/memoryControllers.js";

const router = express.Router();

router.get("/", getMemory);
router.post("/post", createMemory);
router.put("/:id", updateData);
export default router;