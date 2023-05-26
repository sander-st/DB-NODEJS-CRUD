import { Router } from "express";
import { addUser, db as dbPool, dbSave } from "../controllers/index.js";

const router = Router();

// routes
router.get("/point", dbPool);

router.get("/", addUser);

router.get("/tables", dbPool);

router.post("/tables", dbSave);

export { router };
