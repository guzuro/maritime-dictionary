import { IStudent } from "maritime-contracts";
import { Schema, model } from "mongoose";

const studentSchema = new Schema<IStudent>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  mainLanguage: { type: String, enum: ["en", "ru"], default: "ru" },
  avatar: { type: String }
},   
{timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at' 
}}
);

export default model("Student", studentSchema);
