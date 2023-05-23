import { Viewer } from "../entities/Viewer";
import { LoginRequest } from "./types";

export const api = {
    login: async (request: LoginRequest) => {
        const {mail, password} = request;
        return new Promise<Viewer>(resolve => setTimeout(() => resolve({
            name: 'Аркаша',
            token: 't2763fyfvuyg7cyf73fgvycyitif73tfytcv'
        }), 1000));
    },

    
}