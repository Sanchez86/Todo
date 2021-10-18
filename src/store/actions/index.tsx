import IDate from 'interfaces';
import {
  ADD_ITEM,
  REMOVE_ITEM,
} from './actionTypes';

const addItem = (data: IDate) => ({
  type: ADD_ITEM,
  payload: data,
});

const removeItem = (id: number) => ({
  type: REMOVE_ITEM,
  payload: id,
});

export {
  removeItem,
  addItem,
};
