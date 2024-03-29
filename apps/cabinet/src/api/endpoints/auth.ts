import { AxiosInstance } from "axios";
import { SignUpData } from 'maritime-contracts'

export default (api: AxiosInstance) => ({
    signIn: (body: SignUpData) => {
        return api.post('auth/signin', body)
            .then(res => res.data)
            .catch(error => { 
                console.error(error)               
            })
    },
    signUp: (body: SignUpData) => {
        return api.post('auth/signup', body)
            .then(res => res.data)
            .catch(error => { 
                console.error(error)               
            })
    }
})