import { registerAs } from '@nestjs/config';

export const AbillsConfig = registerAs('abills', () => ({
  url: process.env.ABILLS_URL,
  key: process.env.ABILLS_KEY,
  createBill: process.env.ABILLS_CREATE_BILL,
}));
