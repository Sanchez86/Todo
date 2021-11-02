import { createReducer } from '@reduxjs/toolkit';

import {
  addItem,
  changeItem,
  setTemp,
  updateItem,
  removeItem,
} from '../actions';

const lsData = localStorage.getItem('data');

const initialState = {
  data: lsData ? JSON.parse(lsData) : [],
};

const deepCopy = (data) => JSON.parse(JSON.stringify(data));

const reducer = createReducer(initialState, (builder) => {
  builder
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
      item.label = action.payload.label;
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
