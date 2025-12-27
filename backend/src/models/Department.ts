import { Schema, model, Types } from "mongoose";

const DepartmentSchema = new Schema(
  {
    hospitalId: {
      type: Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    floor: Number,
    description: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Department = model("Department", DepartmentSchema);
