import { Schema, model } from "mongoose";

const HospitalSchema = new Schema(
  {
    name: { type: String, required: true },
    location: {
      address: String,
      lat: Number,
      lng: Number,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Hospital = model("Hospital", HospitalSchema);
