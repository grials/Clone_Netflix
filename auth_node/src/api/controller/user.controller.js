import userModel from "../../dal/models/user.model";
import dotenv from "dotenv";
import path from "path";
import jwt from "jsonwebtoken";
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});
import configEnvironment from "../../config/environments";

export default class ControllerUser {
  static async getUser(req, res) {
    let { email, password } = req.body;
    try {
      let user = await userModel.findOne({ email: email }).exec();
      if (user !== null) {
        let isExist = await user.validatePassword(password);
        if (isExist) {
          let token = jwt.sign({ id: user._id }, configEnvironment.KEY, {
            expiresIn: 60 * 60 * 24 * 30,
          });
          res
            .status(200)
            .json({
              auth: true,
              email: true,
              password: true,
              token,
              message: "verify suscess",
            })
            .get("Access-Control-Allow-Origin");
        } else {
          res
            .status(403)
            .json({
              auth: false,
              email: true,
              password: false,
              token: undefined,
              message: "password invalid",
            })
            .get("Access-Control-Allow-Origin");
        }
      } else {
        res
          .status(403)
          .json({
            auth: false,
            email: false,
            password: undefined,
            token: undefined,
            message: "email invalid",
          })
          .get("Access-Control-Allow-Origin");
      }
    } catch (err) {
      console.log(err);
      res
        .status(403)
        .json({
          auth: false,
          email: true,
          password: false,
          token: undefined,
          message: "error data invalid.",
        })
        .get("Access-Control-Allow-Origin");
    }
  }

  static async addUser(req, res) {
    let {
      email,
      password,
      name,
      lastName,
      numCard,
      dateExpirCard,
      segureCode,
      planElect,
    } = req.body;

    let { name: _name, price, quality, resolution } = planElect;

    const user = new userModel({
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      numCard: numCard,
      dateExpirCard: dateExpirCard,
      segureCode: segureCode,
      planElect: {
        name: _name,
        price: price,
        quality: quality,
        resolution: resolution,
      },
    });

    user.password = await user.encryptPassword(user.password);
    await user.save();

    let token = jwt.sign({ id: user._id }, configEnvironment.KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    console.log(user);
    res.status(200).json({
      massege: "user created",
      token,
    });
  }

  static async verifyUser(req, res) {
    try {
      const decoded =
        jwt.verify(req.headers["x-access-token"], configEnvironment.KEY) ||
        false;

      if (userModel.find({ _id: decoded._id })) {
        return res.status(200).json({
          auth: true,
          message: "check suscess.",
        });
      } else {
        return res.status(403).json({
          auth: false,
          message: "user not logged in.",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(403).json({
        auth: false,
        message: "Error token not valid.",
      });
    }
  }
}
