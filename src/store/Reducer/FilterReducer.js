import { SET_SEARCH, SET_CATEGORY, SET_MIN_PRICE, SET_MAX_PRICE, RESET_FILTER  } from "../Action/FilterAction";

const initialState = {
  searchQuery: "",
  category: "",
  minPrice: 0,
  maxPrice: Infinity
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, searchQuery: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case SET_MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case RESET_FILTER:
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;