import { IStudent } from "maritime-contracts";
import { Schema, model } from "mongoose";

const studentSchema = new Schema<IStudent>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  mainLanguage: { type: String, enum: ["en", "ru"], default: "ru" },
  avatar: { type: String }
});

export default model("Student", studentSchema);
