import { SignUpData } from "maritime-contracts"
import { StudentService } from "./student.service.js"

export const AuthService = {
    signUp: async (data: SignUpData) => {
        await StudentService.create(data)
    },    
    signIn: async () => {
        return '/auth/signin'
    }
}