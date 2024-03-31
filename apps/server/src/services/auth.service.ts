import { SignInData, SignUpData } from "maritime-contracts";
import { StudentService } from "./student.service.js";
import Student from "../models/student.js";
import bcrypt from "bcryptjs";

export const AuthService = {
  signUp: async (data: SignUpData) => {
    await StudentService.create(data);
  },
  signIn: async (data: SignInData) => {
    const { login, password } = data;

    const user = await Student.findOne({ login }).exec();

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      return isPasswordValid;
    }

    return false;
  }
};
