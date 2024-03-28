import { SignUpData } from "maritime-contracts";
import Student from "../models/student.js";

export const StudentService = {
    create: async (data: SignUpData) => {
        const student = new Student(data)

        await student.save()
    }   
}