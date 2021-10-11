import IDate from 'interfaces';

const setData = (data: IDate[]) => ({
  type: 'SET_DATA',
  payload: data,
});

const addItem = (data: IDate) => ({
  type: 'ADD_ITEM',
  payload: data,
});

export {
  setData,
  addItem,
};
