import express, { Express } from "express";
import { router as accountRoutes } from "./routes/account.route";

export const app: Express = express();

app.use(express.json());

app.use("/accounts", accountRoutes);
