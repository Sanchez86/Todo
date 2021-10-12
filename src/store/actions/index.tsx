import IDate from 'interfaces';

const setData = (data: IDate[]) => ({
  type: 'SET_DATA',
  payload: data,
});

const removeItem = (id: number) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export {
  setData,
  removeItem,
};
