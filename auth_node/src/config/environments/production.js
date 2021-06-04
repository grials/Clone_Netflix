import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const {
  DB_NAME_PRODUCTION,
  DB_PRODUCTION_PASSWORD,
  DB_PRODUCTION_USER,
  DB_URL,
  PORT,
  KEY,
} = process.env;

module.exports = {
  environment: "production",
  KEY,
  PORT,
  db: {
    DB_NAME: DB_NAME_PRODUCTION,
    DB_URL: DB_URL.replace(
      "<username>:<password>",
      `${DB_PRODUCTION_USER}:${DB_PRODUCTION_PASSWORD}`
    ),
  },
};
