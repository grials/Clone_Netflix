import express from "express";
import path from "path";
import morgan from "morgan";
import body_parser from "body-parser";
import routeUser from "./api/routes/auth.route";
import getConection from "./dal/conection";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(body_parser.json());
app.use(cors());
app.use(routeUser);

getConection()
  .then((resp) => console.log("Conexion realizada con exito MongoDB"))
  .catch((err) => console.log(err));

app.get("/singin", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/browse", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup/registration", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup/regform", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup/planform", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup/payment", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.get("/singup/creditoption", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("*", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

export default app;
