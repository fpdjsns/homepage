import axios, { AxiosPromise } from 'axios'
import { TodoResponse } from '../store/modules/todo';
import { config } from './apiConfig';

const googleSheetApi = axios.create({
    baseURL: config.baseUrl
})

export function fetchTodos(): AxiosPromise<TodoResponse> {
    const params = { key: config.apiKey }
    return googleSheetApi.get(`${config.sheetId}/values/${config.sheetName}`, { params });
}