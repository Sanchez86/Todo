import {
  SET_DATA,
  ADD_ITEM,
  CHANGE_ITEM,
  SET_TEMP,
  UPDATE_ITEM,
  REMOVE_ITEM,

} from '../actions/actionTypes';

const initialState = {
  data: [],
  temp: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_ITEM:
    {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      const item = state.data.find((el) => el.id === action.payload);
      item.completed = !item.completed;
      return {
        ...state,
        data: [
          ...state.data.slice(0, itemIndex),
          item,
          ...state.data.slice(itemIndex + 1),
        ],
      };
    }
    case SET_TEMP:
      return {
        ...state,
        temp: action.payload,
      };
    case REMOVE_ITEM:
    {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_ITEM:
    {
      console.log(action.payload.id);
      const itemIndex = state.data.findIndex((item) => item.id === action.payload.id);
      const item = state.data.find((el) => el.id === action.payload.id);
      item.label = action.payload.label;
      return {
        ...state,
        data: [
          ...state.data.slice(0, itemIndex),
          item,
          ...state.data.slice(itemIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
