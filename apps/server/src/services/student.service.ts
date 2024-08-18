import Student from "../models/student.js";

import bcrypt from "bcryptjs";
import { SignUpData } from "maritime-contracts";
import PasswordNotValidException from "../exceptions/user/PasswordNotValidException.js";

export const StudentService = {
  create: async (data: SignUpData) => {
    const student = new Student(data);

    if (student.password) {
      student.password = await bcrypt.hash(student.password, 10);

      await student.save();

      return true;
    }

    throw PasswordNotValidException;
  }
};
