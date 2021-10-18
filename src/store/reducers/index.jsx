import {
  ADD_ITEM,
  REMOVE_ITEM,
} from '../actions/actionTypes';

const lsData = localStorage.getItem('data');

const initialState = {
  data: lsData ? JSON.parse(lsData).data : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
    {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    case ADD_ITEM:
    {
      const newData = {
        ...state,
        data: [...state.data, action.payload],
      };

      localStorage.setItem('data', JSON.stringify(newData));

      return newData;
    }
    default:

      return state;
  }
};

export default reducer;
