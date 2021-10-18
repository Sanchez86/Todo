import {
  ADD_ITEM,
  CHANGE_ITEM,
  SET_TEMP,
  UPDATE_ITEM,
  REMOVE_ITEM,

} from '../actions/actionTypes';

const lsData = localStorage.getItem('data');

const initialState = {
  data: lsData ? JSON.parse(lsData) : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ITEM:
    {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      const item = state.data.find((el) => el.id === action.payload);
      item.completed = !item.completed;

      const newData = [
        ...state.data.slice(0, itemIndex),
        item,
        ...state.data.slice(itemIndex + 1),
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      return {
        ...state,
        data: newData,
      };
    }
    case SET_TEMP:

      return {
        ...state,
        temp: action.payload,
      };
    case REMOVE_ITEM:
    {
      const newData = state.data ? state.data.filter((item) => item.id !== action.payload) : [];

      localStorage.setItem('data', JSON.stringify(newData));

      return {
        ...state,
        data: newData,
      };
    }
    case ADD_ITEM: {
      const newData = {
        ...state,
        data: [...state.data, action.payload],
      };

      localStorage.setItem('data', JSON.stringify(newData.data));

      return newData;
    }
    case UPDATE_ITEM:
    {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload.id);
      const item = state.data.find((el) => el.id === action.payload.id);
      item.label = action.payload.label;
      const newData = [
        ...state.data.slice(0, itemIndex),
        item,
        ...state.data.slice(itemIndex + 1),
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      return {
        ...state,
        data: newData,
      };
    }
    default:

      return state;
  }
};

export default reducer;
