import express from "express";
import { router } from "./req.routes.js";

const app = express();

const expressJSON = express.json();

export { app, router, expressJSON };
