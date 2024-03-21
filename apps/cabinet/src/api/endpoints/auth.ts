import { AxiosInstance } from "axios";

export default (api: AxiosInstance) => ({
    signIn: () => {
        return api.post('auth/signup')
    }
})