import { registerAs } from '@nestjs/config';

export const GatewayConfig = registerAs('gateway', () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  prefix: process.env.PREFIX,
  protocol: process.env.PROTOCOL,
}));
