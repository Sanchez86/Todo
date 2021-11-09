import { createReducer } from '@reduxjs/toolkit';
import { deepCopy } from 'utils/helper';
import IDate from 'interfaces';

import {
  addItem,
  changeItem,
  setTemp,
  updateItem,
  removeItem,
  setTodoData,
} from '../actions';

const lsData = localStorage.getItem('data');

interface IinitialState {
  data: Array<IDate>,
  temp?: IDate
}

const initialState: IinitialState = {
  data: lsData ? JSON.parse(lsData) : [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTodoData, (state, action) => {
      const stateData = deepCopy(state.data);
      localStorage.setItem('data', JSON.stringify([...stateData, ...action.payload]));
      state.data = [...state.data, ...action.payload];
    })
    .addCase(addItem, (state, action) => {
      const stateData = deepCopy(state.data);
      localStorage.setItem('data', JSON.stringify([...stateData, action.payload]));

      state.data = [...state.data, action.payload];
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
    .addCase(updateItem, (state, action) => {
      const stateData = deepCopy(state.data);
      const itemIndex = stateData.findIndex((item) => item.id === action.payload.id);
      const item = stateData.find((el) => el.id === action.payload.id);
      item.title = action.payload.title;
      const newData = [
        ...stateData.slice(0, itemIndex),
        item,
        ...stateData.slice(itemIndex + 1),
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      state.data = newData;
    })
    .addCase(removeItem, (state, action) => {
      const newData = state.data ? state.data.filter((item) => item.id !== action.payload) : [];

      localStorage.setItem('data', JSON.stringify(newData));

      state.data = newData;
    });
});

export default reducer;
