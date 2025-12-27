import { z } from "zod";

export const createHospitalSchema = z.object({
  name: z.string().min(3),
  location: z.object({
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }).optional(),
});
