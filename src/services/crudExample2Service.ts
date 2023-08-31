import api from "./api";

import { CrudExample2 } from "../types/interfaces/CrudExample2";

const route = "/crud-example2";

export const createItem = async (item: CrudExample2): Promise<CrudExample2> => {
    const response = await api.post<CrudExample2>(route, item);
    return response.data;
}

export const getItems = async (): Promise<CrudExample2[]> => {
    const response = await api.get<CrudExample2[]>(route);
    return response.data;
}

export const getItemById = async (id: number): Promise<CrudExample2> => {
    const response = await api.get<CrudExample2>(route, { params: { id } });
    return response.data;
}

export const updateItem = async (item: CrudExample2): Promise<CrudExample2> => {
    const response = await api.put<CrudExample2>(route, {params: { id: item.id }, data: item})
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<CrudExample2> => {
    const response = await api.delete<CrudExample2>(route, { params: { id } });
    return response.data;
}

export const createOrUpdateItem = async (item: CrudExample2): Promise<CrudExample2> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
