import api from "./api";

import { User } from "../types/interfaces/User";

const route = "/auth/users";

export const createUser = async (user: User): Promise<User> => {
    const response = await api.post<User>("/auth/signup", user);
    return response.data;
}

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get<User[]>(route);
    return response.data;
}

export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get<User>(`${route}/${id}`);
    return response.data;
}

export const updateUser = async (user: User): Promise<User> => {
    const response = await api.put<User>(`${route}/${user.id}`, user);
    return response.data;
}

export const deleteUser = async (id: number | undefined): Promise<User> => {
    const response = await api.delete<User>(`${route}/${id}`);
    return response.data;
}

export const createOrUpdateUser = async (user: User): Promise<User> => {
    if (!user.id) {
        return await createUser(user);
    } else {
        return await updateUser(user);
    }
}
