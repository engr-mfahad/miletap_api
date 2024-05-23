import { Account } from "../models/account";

export const timestamp_to_string = (timestamp: Date) => {
  const year = timestamp.getUTCFullYear(),
    month = timestamp.getUTCMonth() + 1,
    day = timestamp.getUTCDate(),
    hour = timestamp.getUTCHours(),
    min = timestamp.getUTCMinutes(),
    sec = timestamp.getUTCSeconds();
  return `${year}-${(month < 10 ? "0" : "") + month}-${
    (day < 10 ? "0" : "") + day
  } ${hour}:${min}:${sec}`;
};

export const model_to_dto = (model: any): Account | null => {
  let account!: Account;
  if (model) {
    const { firstName, lastName, createdAt, lastModified, ...acc } = model;
    account = {
      first_name: firstName,
      last_name: lastName,
      created_at: timestamp_to_string(createdAt),
      last_modified: timestamp_to_string(lastModified),
      ...acc,
    };
  }
  return account;
};

export const dto_to_model = (
  dto: any
): {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
} => {
  return {
    firstName: dto.first_name,
    lastName: dto.last_name,
    email: dto.email,
    phone: dto.phone,
    password: dto.password,
    birthday: dto.birthday,
  };
};
