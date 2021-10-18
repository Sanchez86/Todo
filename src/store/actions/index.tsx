import IDate from 'interfaces';
import {
  ADD_ITEM,
  CHANGE_ITEM,
  SET_TEMP,
  UPDATE_ITEM,
  REMOVE_ITEM,
} from './actionTypes';

const addItem = (data: IDate) => ({
  type: ADD_ITEM,
  payload: data,
});

const changeItem = (id: number) => ({
  type: CHANGE_ITEM,
  payload: id,
});

// set Temp for change label
const setTemp = (data: IDate) => ({
  type: SET_TEMP,
  payload: data,
});

const updateItem = (data: IDate) => ({
  type: UPDATE_ITEM,
  payload: data,
});

const removeItem = (id: number) => ({
  type: REMOVE_ITEM,
  payload: id,
});

export {
  removeItem,
  addItem,
  changeItem,
  updateItem,
  setTemp,
};
