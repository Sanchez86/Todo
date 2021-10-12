const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'CHANGE_ITEM':
    {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      const item = state.data.find((el) => el.id === action.payload);
      item.completed = !item.completed;
      console.log('item', item);
      return {
        ...state,
        data: [
          ...state.data.slice(0, itemIndex),
          item,
          ...state.data.slice(itemIndex + 1),
        ],
      };
    }
    case 'EDIT_ITEM':
      return {
        ...state,
        temp: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
