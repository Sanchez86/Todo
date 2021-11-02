import { createAction } from '@reduxjs/toolkit';
import IDate from 'interfaces';
import {
  ADD_ITEM,
  CHANGE_ITEM,
  SET_TEMP,
  UPDATE_ITEM,
  REMOVE_ITEM,
} from './actionTypes';

const addItem = createAction<IDate>(ADD_ITEM);

const changeItem = createAction<number>(CHANGE_ITEM);

// set Temp for change label
const setTemp = createAction<IDate>(SET_TEMP);

const updateItem = createAction<IDate>(UPDATE_ITEM);

const removeItem = createAction<number>(REMOVE_ITEM);

export {
  removeItem,
  addItem,
  changeItem,
  updateItem,
  setTemp,
};
