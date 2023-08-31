import api from "./api";

import { User } from "../types/interfaces/User";
import { Token } from "../types/interfaces/Token";

export const signin = async (User: User): Promise<Token> => {
    const response = await api.post<Token>("/auth/signin", User);
    return response.data;
}

export const signup = async (User: User): Promise<Token> => {
    const response = await api.post<Token>("/auth/signup", User);
    return response.data;
}
