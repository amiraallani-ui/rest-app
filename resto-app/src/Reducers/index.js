import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { orderReducer } from "./menuReducer";
import { userReducer } from "./menuReducer";

export const allReducers = combineReducers({
  Menu: menuReducer,
  Order: orderReducer,
  User: userReducer,
});
