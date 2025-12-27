import { Department } from "../models/Department";

export const createDepartment = async (data: any) => {
  return await Department.create(data);
};

export const getDepartmentsByHospital = async (hospitalId: string) => {
  return await Department.find({ hospitalId, isActive: true });
};
