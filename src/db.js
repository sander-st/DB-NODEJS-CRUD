import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

// CONNECT DATABASES
const dbPool = createPool({
  host: process.env.URI_MYSQL,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE,
  port: process.env.PORT_MYSQL,
  // enableKeepAlive: true,
});

export { dbPool };
