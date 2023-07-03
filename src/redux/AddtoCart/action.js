import { ADD_TO_BAG } from "./actiontype";

export const postAddtoBagRequest = () => {
    return {
      type: ADD_TO_BAG,
    };
};
  


export const postAddtoBag = (payload) => async (dispatch) => {
    dispatch(postBagRequest());
  
    return axios
      .post("http://localhost:5000/cart", payload)
      .then((res) => {
        dispatch(postBagSuccess());
        dispatch(getBagData());
      })
      .catch((err) => {
        dispatch(postBagFailure());
      });
  };