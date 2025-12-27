import { Hospital } from "../models/Hospital";

export const createHospital = async (data: any) => {
  return await Hospital.create(data);
};

export const getHospitals = async () => {
  return await Hospital.find({ isActive: true });
};
