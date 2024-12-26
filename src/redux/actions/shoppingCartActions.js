import { toast } from 'react-toastify';

export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT";
export const TOGGLE_ITEM_CHECKED = "TOGGLE_ITEM_CHECKED";

export const addToCart = (product) => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState();
        const { cart } = shoppingCart;

        const existingItemIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );

        if (existingItemIndex !== -1) {
            const existingItem = cart[existingItemIndex];
            const newCount = existingItem.count + 1;
            if (newCount > product.stock) {
                toast.error("You can't add more of this product!", {
                    autoClose: 3000,
                });
                return;
            } else {
                dispatch({
                    type: ADD_TO_CART,
                    payload: {
                        product,
                        increment: true,
                    },
                });
                toast.success("Added one more to the cart!", {
                    autoClose: 2000,
                });
            }
        } else {
            if (product.stock < 1) {
                toast.error("This product is out of stock!", {
                    autoClose: 3000,
                });
                return;
            }
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    product,
                    increment: false,
                },
            });
            toast.success("Product added to the cart!", {
                autoClose: 2000,
            });
        }
    };
};

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });

  /**
 * Update item count (for incrementing or decrementing)
 * @param {string | number} productId
 * @param {number} newCount
 */
export const updateItemCount = (productId, newCount) => ({
    type: UPDATE_ITEM_COUNT,
    payload: { productId, newCount },
  });
  
  /**
   * Toggle the 'checked' property for an item by productId
   */
  export const toggleItemChecked = (productId) => ({
    type: TOGGLE_ITEM_CHECKED,
    payload: productId,
  });
