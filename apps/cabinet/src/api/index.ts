import { baseApi } from "./axios";
import auth from "./endpoints/auth";

export const api = {
    auth: auth(baseApi)
}