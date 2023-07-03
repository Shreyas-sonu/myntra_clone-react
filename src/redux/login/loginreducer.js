import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from "./actionTypes";

const loginstate = {
  timeLoading: false,
  timeError: false,
  userAuth: false,
  userReg: false,
  username: "",
  cardnumber: "",
  phoneNumber: "",
  email: "",
  bag: [],
};

export const loginReducer = (state = loginstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        timeLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        timeLoading: false,
        userAuth: true,
        bag: payload.cart,
        username: payload.username,
        email: payload.email,
        cardnumber: payload.cardnumber,
        phoneNumber: payload.mobilenumber,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        timeError: true,
        timeLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        userAuth: false,
      };
    default:
      return state;
  }
};
