import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Account } from "../models/account";
import * as accounts from "../services/account.service";

export const create = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const payload: Account = req.body as Account;
  res.json(await accounts.create(payload));
};

export const update = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id }: { id?: string } = req.params;
  const payload: Account = req.body as Account;
  res.json(await accounts.update(payload, id));
};

export const list = async (req: Request, res: Response) => {
  res.json(await accounts.findAll());
};

export const get = async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  res.json(await accounts.findById(id));
};

export const purge = async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  res.send(await accounts.purge(id));
};
