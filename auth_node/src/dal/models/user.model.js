import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  numCard: {
    type: String,
    require: true,
  },
  dateExpirCard: {
    type: Date,
    require: true,
  },
  segureCode: {
    type: String,
    require: true,
  },
  planElect: {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    quality: {
      type: String,
      require: true,
    },
    resolution: {
      type: String,
      require: true,
    },
  },
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password) {
  let isExist = await bcrypt.compare(password, this.password);
  return isExist;
};

export default model("users", userSchema);
