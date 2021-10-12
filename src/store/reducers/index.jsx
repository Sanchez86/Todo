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
    case 'REMOVE_ITEM':
    {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      return {
        ...state,
        data: [
          ...state.data.slice(0, itemIndex),
          ...state.data.slice(itemIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
