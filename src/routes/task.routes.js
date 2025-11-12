import { Router } from "express";
import { getTasks, addTask, deleteTask, updateTask ,updateStatus} from "../controllers/task/task.controller.js";
const router = Router();

router.get("/", getTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/status", updateStatus);

export default router;