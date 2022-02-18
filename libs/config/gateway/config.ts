import { registerAs } from '@nestjs/config';

export const Config = registerAs('gateway', () => ({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 80,
  prefix: process.env.PREFIX || 'api',
  protocol: process.env.PROTOCOL || 'http',
}));
