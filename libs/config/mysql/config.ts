import { registerAs } from '@nestjs/config';

export const MysqlConfig = registerAs('mysql', () => ({
  host: process.env.MYSQL_HOST || 'http://localhost',
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'jump',
  synchronize: process.env.MYSQL_SYNC || true,
  type: process.env.MYSQL_TYPE || 'mysql',
}));
