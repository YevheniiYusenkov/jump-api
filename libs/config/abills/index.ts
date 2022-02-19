import { registerAs } from '@nestjs/config';

export const AbillsConfig = registerAs('abills', () => ({
  url: process.env.ABILLS_URL || 'https://demo.abills.net.ua:9443/api.cgi',
  key: process.env.ABILLS_KEY,
}));
