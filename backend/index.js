import express from "express";
import cors from "cors";
import mountRoutes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // POST Req using application/x-www-form-urlencoded

mountRoutes(app);

export default app;
