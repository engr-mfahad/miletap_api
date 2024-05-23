import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const parse_db_error = (error: unknown): string => {
  const err = error as PrismaClientKnownRequestError;
  let msg = "Some unknown error occured. Please try again later.";
  if (err.code == "P2002")
    msg = `Unique constraint not satisfied for the field: ${
      (err.meta?.target as String)[0]
    }`;
  return msg;
};
