import IDate from 'interfaces';

const setData = (data: IDate[]) => ({
  type: 'SET_DATA',
  payload: data,
});

const changeItem = (id: number) => ({
  type: 'CHANGE_ITEM',
  payload: id,
});
const editItem = (data: IDate) => ({
  type: 'EDIT_ITEM',
  payload: data,
});

export {
  setData,
  changeItem,
  editItem,
};
