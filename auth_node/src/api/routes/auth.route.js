import { Router } from "express";
import UserController from "../controller/user.controller";
import authMiddleware from "../middleware/authUser.middleware";
import verifEmailMiddleware from "../middleware/verifEmail.middleware";
import verifUserMiddleware from "../middleware/verifUser.middleware";

let routeUser = Router();

routeUser.post("/auth/user", verifEmailMiddleware, UserController.getUser);
routeUser.post("/singup/add", verifUserMiddleware, UserController.addUser);
routeUser.get("/auth/isregister", authMiddleware, UserController.verifyUser);

export default routeUser;
