import IDate from 'interfaces';

const setData = (data: IDate[]) => ({
  type: 'SET_DATA',
  payload: data,
});

const changeItem = (id: number) => ({
  type: 'CHANGE_ITEM',
  payload: id,
});

export {
  setData,
  changeItem,
};
