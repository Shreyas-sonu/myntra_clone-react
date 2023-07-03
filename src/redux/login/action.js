import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from "./actionTypes";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = () => {
  return {
    type: LOGIN_FAIL,
  };
};

export const loginProcess = (userdetails, mobile) => (dispatch) => {
  console.log("login");
  dispatch(loginRequest());
  let payload = userdetails.filter((item) => item.mobilenumber == mobile);
  payload = payload[0];
  if (payload === undefined) {
    alert("User not found");
    dispatch(loginFail());
  } else {
    alert(`Welcome Back ${payload.username} `);
    dispatch(loginSuccess(payload));
  }
};

export const logoutReq = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
