import Axios from "axios";

export const GET_MENU = "GET_MENU";

export const getMenu = (payload) => ({
  type: GET_MENU,
  payload: payload,
});

export const ADD_MEAL = "ADD_MEAL";
export const addMeal = (payload) => ({
  type: ADD_MEAL,
  payload: payload,
});
export const EDIT_MEAL = "EDIT_MEAL";
export const editMeal = (payload) => ({
  type: EDIT_MEAL,
  payload: payload,
});
export const DELETE_MEAL = "DELETE_MEAL";

export const deleteMeal = (payload) => ({
  type: DELETE_MEAL,
  payload: payload,
});
export const ADD_ORDER_FOOD = "ADD_ORDER_FOOD";
export const AddorderFood = (payload) => ({
  type: ADD_ORDER_FOOD,
  payload: payload,
});
export const GET_ORDER_FOOD = "GET_ORDER_FOOD";
export const GetOrderFood = (payload) => ({
  type: GET_ORDER_FOOD,
  payload: payload,
});
export const DELETE_ORDER_FOOD = "DELETE_ORDER_FOOD";
export const DeleteOrderFood = (payload) => ({
  type: DELETE_ORDER_FOOD,
  payload: payload,
});
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UpdateQuantityFood = (payload) => ({
  type: UPDATE_QUANTITY,
  payload: payload,
});
export const GET_USERS = "GET_USERS";
export const GetUsers = (payload) => ({
  type: GET_USERS,
  payload: payload,
});
export const ADD_USERS = "ADD_USERS";
export const AddUsers = (payload) => ({
  type: ADD_USERS,
  payload: payload,
});
//Actions Creator
//To Get Menu Food
export function getMenuFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/posts").then((res) =>
      dispatch(getMenu(res.data))
    );
}
//To Add Food To The  Menu
export function addFoodToApi(Food) {
  return (dispatch) => {
    Axios.post("http://localhost:4000/posts", Food).then((res) => {
      dispatch(addMeal(Food));
      console.log(Food);
      console.log(res.data);
      window.location.reload(false);
    });
  };
}
export function DeleteFoodInApi(id) {
  return (dispatch) => {
    Axios.delete(`http://localhost:4000/posts/${id}`).then((res) => {
      dispatch(deleteMeal(res.data));
      window.location.reload(false);
    });
  };
}
export function UpDateFoodInAPI(Food) {
  return (dispatch) => {
    Axios.patch(`http://localhost:4000/posts/${Food.id}`, Food).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  };
}
export function getOrderFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/orders").then((res) =>
      dispatch(GetOrderFood(res.data))
    );
}
export function addOrderInApi(Food) {
  return (dispatch) =>
    Axios.post("http://localhost:4000/orders", Food).then((res) =>
      dispatch(AddorderFood(res.data))
    );
}
//To Delete Food From THe Orders
export function DeleteFoodFromOrder(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:4000/orders/${id}`).then((res) => {
      dispatch(DeleteOrderFood(res.data));
      window.location.reload();
    });
}
//To updat the quantity
export function UpdateQuantityInOrderApi(Food) {
  return (dispatch) =>
    Axios.patch(`http://localhost:4000/orders/${Food.id}`, Food).then((res) => {
      dispatch(UpdateQuantityFood(res.data));
      window.location.reload();
    });
}
export function GetUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/users").then((res) => {
      dispatch(GetUsers(res.data));
    });
}
export function addUserToApi(User) {
  return (dispatch) =>
    Axios.post("http://localhost:4000/users", User).then((res) =>
      dispatch(AddUsers(res.data))
    );
}
