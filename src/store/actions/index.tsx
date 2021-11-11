import { createAction } from '@reduxjs/toolkit';
import IDate from 'interfaces';

const addItem = createAction<IDate>('ADD_ITEM');

const changeItem = createAction<number>('CHANGE_ITEM');

// set Temp for change label
const setTemp = createAction<IDate>('SET_TEMP');

const updateItem = createAction<IDate>('UPDATE_ITEM');

export {
  addItem,
  changeItem,
  updateItem,
  setTemp,
};
