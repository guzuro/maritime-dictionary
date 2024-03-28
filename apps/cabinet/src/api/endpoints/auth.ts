import { AxiosInstance } from "axios";
import { SignUpData } from 'maritime-contracts'

export default (api: AxiosInstance) => ({
    signIn: () => {
        return api.post('auth/signup')
    },
    signUp: (body: SignUpData) => {
        return api.post('auth/signup', body)
            .then(res => res.data)
            .catch(error => { 
                console.error(error)               
            })
    }
})