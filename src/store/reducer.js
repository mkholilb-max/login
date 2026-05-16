import { combineReducers } from "@reduxjs/toolkit";
import TotalPriceReducer from "./Reducer/TotalPriceReducer";
import FilterReducer from "./Reducer/FilterReducer";
import authReducer from "./Reducer/AuthReducer";

const reducer = combineReducers({
    totalPriceReducer: TotalPriceReducer,
    filterReducer: FilterReducer,
    authReducer: authReducer
});

export default reducer;