import IDate from 'interfaces';
import { SET_DATA, ADD_ITEM } from './actionTypes';

const setData = (data: IDate[]) => ({
  type: SET_DATA,
  payload: data,
});

const addItem = (data: IDate) => ({
  type: ADD_ITEM,
  payload: data,
});

export {
  setData,
  addItem,
};
