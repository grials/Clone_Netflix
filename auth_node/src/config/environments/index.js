import dotenv from "dotenv";
import production from "./production";
import development from "./development";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

let { NODE_ENV } = process.env;

let configEnvironment = development;

if (NODE_ENV === "production") {
  configEnvironment = production;
}

export default configEnvironment;
