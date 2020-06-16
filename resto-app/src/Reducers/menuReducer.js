import {
  GET_MENU,
  ADD_MEAL,
  EDIT_MEAL,
  DELETE_MEAL,
  ADD_ORDER_FOOD,
  GET_ORDER_FOOD,
  DELETE_ORDER_FOOD,
  UPDATE_QUANTITY,
  GET_USERS,
  ADD_USERS,
} from "../Actions/menuAction";

const initialState = [];

export function menuReducer(state = initialState, action) {
  if (action.type === GET_MENU) {
    return action.payload;
  } else if (action.type === ADD_MEAL) {
    return [...state, action.payload];
  } else if (action.type === EDIT_MEAL) {
    return [...state, action.payload];
  } else if (action.payload === DELETE_MEAL) {
    return [...state, action.payload];
  }
  return state;
}
export function orderReducer(state = initialState, action) {
  if (action.type === ADD_ORDER_FOOD) {
    return [...state, action.payload];
  } else if (action.type === GET_ORDER_FOOD) {
    return action.payload;
  } else if (action.type === DELETE_ORDER_FOOD) {
    return [...state, action.payload];
  } else if (action.type === UPDATE_QUANTITY) {
    return [...state, action.payload];
  }
  return state;
}
export function userReducer(state = initialState, action) {
  if (action.type === GET_USERS) {
    return action.payload;
  } else if (action.type === ADD_USERS) {
    return [...state, action.payload];
  } else return state;
}
