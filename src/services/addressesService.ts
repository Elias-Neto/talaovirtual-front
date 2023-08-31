import api from "./api";

import { Address } from "../types/interfaces/Customers";

const route = "/addresses";

export const createItem = async (item: Address): Promise<Address> => {
    const response = await api.post<Address>(route, item);
    return response.data;
}

export const getItems = async (): Promise<Address[]> => {
    const response = await api.get<Address[]>(route);
    return response.data;
}

export const getItemById = async (id: number): Promise<Address> => {
    const response = await api.get<Address>(route, { params: { id } });
    return response.data;
}

export const updateItem = async (item: Address): Promise<Address> => {
    const response = await api.put<Address>(`${route}/${item.id}`, item);
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<Address> => {
    const response = await api.delete<Address>(`${route}/${id}`);
    return response.data;
}

export const createOrUpdateItem = async (item: Address): Promise<Address> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
