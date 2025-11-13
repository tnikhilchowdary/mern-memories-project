import express from "express";
import {getMemory, createMemory, updateData, deleteUpdate} from "../controllers/memoryControllers.js";

const router = express.Router();

router.get("/", getMemory);
router.post("/post", createMemory);
router.put("/:id", updateData);
router.delete("/:id", deleteUpdate);
export default router;