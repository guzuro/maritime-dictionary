import { StudentService } from "./student.service.js";
import Student from "../models/student.js";
import { PasswordNotValidException, UserNotFoundException } from "../exceptions/user/index.js";

import { SignInData, SignUpData } from "maritime-contracts";
import bcrypt from "bcryptjs";

export const AuthService = {
  signUp: async (data: SignUpData) => {
    return StudentService.create(data);
  },
  signIn: async (data: SignInData) => {
    const { login, password } = data;

    const user = await Student.findOne({ login }).exec();

    if (user) {
      if (user.password) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return true;
        }
      }

      throw new PasswordNotValidException();
    }

    throw new UserNotFoundException();
  }
};
