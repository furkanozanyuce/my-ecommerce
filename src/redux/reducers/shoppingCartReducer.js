import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_COUNT, TOGGLE_ITEM_CHECKED } from "../actions/shoppingCartActions";

function loadCartFromLocalStorage() {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return []; // no cart found
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error("Error loading cart from localStorage", err);
    return [];
  }
}

const initialState = {
  cart: loadCartFromLocalStorage(),
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
    case ADD_TO_CART: {
      const { product, increment } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          count: 1,
          checked: true,
          product: product,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== productId
      );
      return { ...state, cart: updatedCart };
    }

    case UPDATE_ITEM_COUNT: {
      const { productId, newCount } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, count: newCount };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case TOGGLE_ITEM_CHECKED: {
      const productId = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
