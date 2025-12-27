import { Request, Response } from "express";
import * as DepartmentService from "../services/department.service";

export const createDepartmentHandler = async (
  req: Request,
  res: Response
) => {
  const dept = await DepartmentService.createDepartment(req.body);
  res.status(201).json(dept);
};

export const getDepartmentsHandler = async (
  req: Request,
  res: Response
) => {
  const { hospitalId } = req.query;

  if (!hospitalId) {
    return res.status(400).json({
      message: "hospitalId query param is required",
    });
  }

  const depts = await DepartmentService.getDepartmentsByHospital(
    hospitalId as string
  );

  res.json(depts);
};
