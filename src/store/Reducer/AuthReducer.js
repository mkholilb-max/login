import { LOGIN, LOGOUT , REGISTER} from "../Action/AuthAction"
import { admin } from "../../data/data"

const initialState = {
  isLoggedIn: false,
  user: admin
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    case REGISTER:
      return {
        ...state,
        user: [...state.user, action.payload]
      }
    default:
      return state
  }
}

export default authReducer