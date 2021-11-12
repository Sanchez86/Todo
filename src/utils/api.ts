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
  removeTodos: (id: number) => apiClient.delete(`/posts/${id}`),
  addTodo: (data: ITodo) => apiClient.post('/posts', data),
};

export default API;
