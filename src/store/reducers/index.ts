import { createReducer } from '@reduxjs/toolkit';
import { deepCopy } from 'utils/helper';
import IDate from 'interfaces';

import {
  changeItem,
  setTemp,
} from '../actions';

import {
  loadTodosRequest,
  loadTodosResponse,
  loadTodosFailure,
} from '../actions/load-todos';

import {
  removeTodosRequest,
  removeTodosResponse,
  removeTodosFailure,
} from '../actions/remove-todo';

import {
  addTodosRequest,
  addTodosResponse,
  addTodosFailure,
} from '../actions/add-todo';

import {
  updateTodosRequest,
  updateTodosResponse,
  updateTodosFailure,
} from '../actions/update-todo';

const lsData = localStorage.getItem('data');

export interface IinitialState {
  data: Array<IDate>,
  temp?: IDate,
  isLoading: boolean,
  error: string
}

const initialState: IinitialState = {
  data: lsData ? JSON.parse(lsData) : [],
  isLoading: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodosRequest, (state) => { // запрос
      state.isLoading = true;
      state.error = ''; // обнулили
    })
    .addCase(addTodosResponse, (state, action) => {
      const stateData = deepCopy(state.data);
      localStorage.setItem('data', JSON.stringify([...stateData, action.payload]));

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.data = [...state.data, action.payload.data];
    })
    .addCase(addTodosFailure, (state, action) => { // ошибка
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(removeTodosRequest, (state, action) => { // запрос
      const elem = state.data.find((item) => item.id === action.payload);
      elem.isLoading = true;
      state.isLoading = true;
      state.error = ''; // обнулили
    })
    .addCase(removeTodosResponse, (state, action) => { // ответ
      const newData = state.data.filter((item) => item.id !== action.payload.id);
      state.data = newData;
      localStorage.setItem('data', JSON.stringify(newData));
    })
    .addCase(removeTodosFailure, (state, action) => { // ошибка
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(loadTodosRequest, (state) => { // запрос
      state.isLoading = true;
      state.error = ''; // обнулили
    })
    .addCase(loadTodosResponse, (state, action) => { // ответ
      localStorage.setItem('data', JSON.stringify(action.payload));
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(loadTodosFailure, (state, action) => { // ошибка
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(changeItem, (state, action) => {
      const stateData = deepCopy(state.data);
      const itemIndex = stateData.findIndex((item) => item.id === action.payload);
      const item = stateData.find((el) => el.id === action.payload);
      item.completed = !item.completed;

      const newData = [
        ...stateData.slice(0, itemIndex),
        item,
        ...stateData.slice(itemIndex + 1),
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      state.data = newData;
    })
    .addCase(setTemp, (state, action) => {
      state.temp = action.payload;
    })
    .addCase(updateTodosRequest, (state) => { // запрос
      state.isLoading = true;
      state.error = ''; // обнулили
    })
    .addCase(updateTodosResponse, (state, action) => {
      const stateData = deepCopy(state.data);
      const itemIndex = stateData.findIndex((item) => item.id === action.payload.data.id);
      const item = stateData.find((el) => el.id === action.payload.data.id);
      item.title = action.payload.data.title;
      const newData = [
        ...stateData.slice(0, itemIndex),
        item,
        ...stateData.slice(itemIndex + 1),
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      state.data = newData;
    })
    .addCase(updateTodosFailure, (state, action) => { // ошибка
      state.isLoading = false;
      state.error = action.payload;
    });
});

export default reducer;
