import { SignUpData } from "maritime-contracts";
import Student from "../models/student.js";
import bcrypt from "bcryptjs";

export const StudentService = {
  create: async (data: SignUpData) => {
    const student = new Student(data);

    if (student.password) {
      student.password = await bcrypt.hash(student.password, 10);
    } else {
      return false;
    }

    await student.save();

    return true;
  }
};
