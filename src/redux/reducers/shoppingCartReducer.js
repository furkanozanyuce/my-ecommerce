import { ADD_TO_CART } from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: null,
  address: null,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case ADD_TO_CART:
      {
        const product = action.payload;
        const existingItemIndex = state.cart.findIndex(
          (item) => item.product.id === product.id
        );

        if (existingItemIndex !== -1) {
          // Product already in cart, increase count
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            count: updatedCart[existingItemIndex].count + 1,
          };
          return { ...state, cart: updatedCart };
        } else {
          // Add new product to cart
          const newCartItem = {
            count: 1,
            checked: true, // or default to whatever you want
            product: product,
          };
          return { ...state, cart: [...state.cart, newCartItem] };
        }
      }
    default:
      return state;
  }
};

export default shoppingCartReducer;
