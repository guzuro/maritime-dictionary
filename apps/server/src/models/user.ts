import { Schema } from "mongoose";

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

