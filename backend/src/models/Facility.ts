import { Schema, model, Types } from "mongoose";

const FacilitySchema = new Schema(
  {
    hospitalId: {
      type: Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    name: String,
    type: {
      type: String,
      enum: ["RECEPTION", "CANTEEN", "PHARMACY", "PARKING"],
    },
    floor: Number,
    mapNodeId: String,
  },
  { timestamps: true }
);

export const Facility = model("Facility", FacilitySchema);
