import mongoose from "mongoose";
import configEnvironment from "../config/environments";

const configConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  useCreateIndex: true,
  family: 4, //!Define el IPv4, si no se define usa el IPv6
};

export default async function getConection() {
  let db = await mongoose.connect(
    configEnvironment.db.DB_URL,
    configConnection
  );

  return db;
}
