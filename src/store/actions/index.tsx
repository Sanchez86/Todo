import IDate from 'interfaces';
import {
  SET_DATA, ADD_ITEM, CHANGE_ITEM, SET_TEMP, UPDATE_ITEM,
} from './actionTypes';

const setData = (data: IDate[]) => ({
  type: SET_DATA,
  payload: data,
});

const addItem = (data: IDate) => ({
  type: ADD_ITEM,
  payload: data,
});

// change status completed
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

export {
  setData,
  setTemp,
  addItem,
  changeItem,
  updateItem,
};
