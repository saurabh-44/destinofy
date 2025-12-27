import { Router } from "express";
import {
  createDepartmentHandler,
  getDepartmentsHandler,
} from "../controllers/department.controller";

const router = Router();

router.post("/", createDepartmentHandler);
router.get("/", getDepartmentsHandler);

export default router;
