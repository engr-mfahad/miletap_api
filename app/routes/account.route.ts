import { Router } from "express";
import * as accounts from "../controllers/account.controller";

export const router = Router();

router.post("/", accounts.create);

router.put("/:id", accounts.update);

router.get("/", accounts.list);

router.get("/:id", accounts.get);

router.delete("/:id", accounts.purge);
