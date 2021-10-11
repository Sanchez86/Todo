import IDate from 'interfaces';

const setData = (data: IDate[]) => ({
  type: 'SET_DATA',
  payload: data,
});

export {
  setData,
};
