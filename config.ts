import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234567890',
  database: 'postgres', // db name
};

export const JWT_KEY: string = "asnoj90KJSd09714na90vy84yhougihbnfq3g7gh&*&g7ghf32ohh9";