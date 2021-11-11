import axios from 'axios';

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
};

export default API;
