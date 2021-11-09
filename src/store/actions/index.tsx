import { createAction } from '@reduxjs/toolkit';
import IDate from 'interfaces';

const addItem = createAction<IDate>('ADD_ITEM');

const changeItem = createAction<number>('CHANGE_ITEM');

// set Temp for change label
const setTemp = createAction<IDate>('SET_TEMP');

const updateItem = createAction<IDate>('UPDATE_ITEM');

const removeItem = createAction<number>('REMOVE_ITEM');

const setTodoData = createAction<Array<IDate>>('SET_TODO_DATA');

export {
  removeItem,
  addItem,
  changeItem,
  updateItem,
  setTemp,
  setTodoData,
};
