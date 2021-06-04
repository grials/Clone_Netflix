import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const {
  DB_NAME_DEVELOPMENT,
  DB_DEVELOPMENT_IP,
  DB_DEVELOPMENT_PORT,
  DB_URL_DEVELOPMENT,
  PORT,
  KEY,
} = process.env;

module.exports = {
  environment: "development",
  PORT,
  KEY,
  db: {
    DB_NAME: DB_NAME_DEVELOPMENT,
    DB_URL: DB_URL_DEVELOPMENT.replace(
      "<ip>:<port>/<database_name>",
      `${DB_DEVELOPMENT_IP}:${DB_DEVELOPMENT_PORT}/${DB_NAME_DEVELOPMENT}`
    ),
  },
};
