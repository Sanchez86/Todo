import axios from 'axios';
import { ITodo } from '../interfaces';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const API = {
  getTodos: () => apiClient.get('/users/1/todos').then((data) => data),
  removeTodos: (id: number) => apiClient.delete(`/todos/${id}`),
  addTodo: (data: ITodo) => apiClient.post('/todos', data),
  updateTodo: (id: number, data: ITodo) => apiClient.put(`/todos/${id}`, data),
};

export default API;
