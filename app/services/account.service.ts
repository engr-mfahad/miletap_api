import { PrismaClient } from "@prisma/client";
import { Account } from "../models/account";
import { dto_to_model, model_to_dto } from "../utils/parser.util";

const prisma = new PrismaClient().$extends({
  query: {
    account: {
      async create({ args, query }) {
        const account = await query({ data: dto_to_model(args.data) });
        return model_to_dto(account);
      },
      async update({ args, query }) {
        const account = await query({
          where: args.where,
          data: dto_to_model(args.data),
        });
        return model_to_dto(account);
      },
      async findUnique({ args, query }) {
        const account = await query(args);
        return model_to_dto(account);
      },
      async findMany({ args, query }) {
        const accounts = await query(args);
        const accountDtos = [];
        for (const account of accounts) {
          const accountDto = model_to_dto(account);
          if (accountDto) accountDtos.push(accountDto);
        }
        return accountDtos;
      },
    },
  },
});

export const create = async (payload: Account) => {
  const result = await prisma.account.create({
    data: { firstName: "", lastName: "", ...payload },
  });
  return result;
};

export const update = async (payload: Account, id?: string) => {
  const account = await findById(id);
  const result = await prisma.account.update({
    where: {
      id: id,
    },
    data: { ...account, ...payload },
  });
  return result;
};

export const findAll = async () => {
  return await prisma.account.findMany();
};

export const findById = async (id?: string) => {
  return await prisma.account.findUnique({
    where: {
      id: id,
    },
  });
};

export const purge = async (id?: string) => {
  return await prisma.account.delete({
    where: {
      id: id,
    },
  });
};
