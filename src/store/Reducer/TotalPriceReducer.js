import { products } from "../../data/product";
import { SET_TOTAL_PRICE, DATA_PRODUCT, CART_PRODUCT } from "../Action/TotalPriceAction";


const initialState = {
    totalPrice: 0,
    dataProduct: products,
    cartProduct: [],
};

const totalPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE :
            return {
                ...state,
                totalPrice: action.payload
            }
        case DATA_PRODUCT :
            return {
                ...state,
                dataProduct: [...action.payload]
            }
        case CART_PRODUCT :
            return {
                ...state,
                cartProduct: action.payload
            }
        default:
            return state;
    }
};

export default totalPriceReducer;
