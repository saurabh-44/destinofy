import { Request, Response } from "express";
import * as HospitalService from "../services/hospital.service";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { createHospitalSchema } from "../validators/hospital.schema";

export const createHospitalHandler = asyncHandler(async (req: Request, res: Response) => {
  const parsed = createHospitalSchema.safeParse(req.body);

  if (!parsed.success) {
    throw new AppError("Invalid hospital data", 400);
  }

  const hospital = await HospitalService.createHospital(parsed.data);
  res.status(201).json(hospital);
});

export const getHospitalsHandler = asyncHandler(async (_req: Request, res: Response) => {
  const hospitals = await HospitalService.getHospitals();
  res.json(hospitals);
});
