import api from "./api";

import { Customer } from "../types/interfaces/Customers";

const route = "/customers";

export const createItem = async (item: Customer): Promise<Customer> => {
    const response = await api.post<Customer>(route, item);
    return response.data;
}

export const getItems = async (): Promise<Customer[]> => {
    const response = await api.get<Customer[]>(route);
    return response.data;
}

export const getItemById = async (id: number): Promise<Customer> => {
    const response = await api.get<Customer>(route, { params: { id } });
    return response.data;
}

export const updateItem = async (item: Customer): Promise<Customer> => {
    const response = await api.put<Customer>(`${route}/${item.id}`, item)
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<Customer> => {
    const response = await api.delete<Customer>(`${route}/${id}`);
    return response.data;
}

export const createOrUpdateItem = async (item: Customer): Promise<Customer> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
