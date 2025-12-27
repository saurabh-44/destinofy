import express from "express";
import cors from "cors";
import hospitalRoutes from "./routes/hospital.routes";
import departmentRoutes from "./routes/department.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

app.use(errorHandler);

export default app;
