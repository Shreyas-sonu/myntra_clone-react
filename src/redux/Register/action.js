import { LOGIN, REGISTER } from "./actiontypes";


export const register = () => ({
  type: REGISTER,
});

export const login = (payload) => ({
  type: LOGIN,
  payload
});

