interface IDate {
  'id': number,
  'completed': boolean,
  'label': string
}
const setData = (data: { id: number; completed: boolean; label: string }[]) => ({
  type: 'SET_DATA',
  payload: data,
});

export {
  setData,
};
