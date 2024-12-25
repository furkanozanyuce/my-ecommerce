export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });
export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};
