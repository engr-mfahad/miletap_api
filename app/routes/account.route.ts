import { Router } from "express";
import * as accounts from "../controllers/account.controller";
import * as validations from "../validations/account.validation";

export const router = Router();

router.post("/", validations.create, accounts.create);

router.put("/:id", validations.update, accounts.update);

router.get("/", accounts.list);

router.get("/:id", accounts.get);

router.delete("/:id", accounts.purge);
