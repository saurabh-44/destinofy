import { Hospital } from "./models/Hospital";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test-db", async (_req, res) => {
  const hospital = await Hospital.create({ name: "Test Hospital" });
  res.json(hospital);
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

export default app;
