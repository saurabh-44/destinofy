import { Router } from "express";
import {
  createHospitalHandler,
  getHospitalsHandler,
} from "../controllers/hospital.controller";

const router = Router();

router.post("/", createHospitalHandler);
router.get("/", getHospitalsHandler);

export default router;
