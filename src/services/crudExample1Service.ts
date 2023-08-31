import api from "./api";

import { CrudExample1 } from "../types/interfaces/CrudExample1";

const route = "/crud-example1";

export const createItem = async (item: CrudExample1): Promise<CrudExample1> => {
    const response = await api.post<CrudExample1>(route, item);
    return response.data;
}

export const getItems = async (): Promise<CrudExample1[]> => {
    const response = await api.get<CrudExample1[]>(route);
    return response.data;
}

export const getItemById = async (id: number): Promise<CrudExample1> => {
    const response = await api.get<CrudExample1>(route, { params: { id } });
    return response.data;
}

export const updateItem = async (item: CrudExample1): Promise<CrudExample1> => {
    const response = await api.put<CrudExample1>(route, {params: { id: item.id }, data: item})
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<CrudExample1> => {
    const response = await api.delete<CrudExample1>(route, { params: { id } });
    return response.data;
}

export const createOrUpdateItem = async (item: CrudExample1): Promise<CrudExample1> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
