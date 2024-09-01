import { createSlice } from '@reduxjs/toolkit';

// Load initial state from local storage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    
      const product = action.payload
    const foundProduct=state.find((item) => item.id === product.id) 
      if (foundProduct) {
        foundProduct.quantity += 1
      }
      else{
        const cloneProduct = {...action.payload,quantity:1}
        state.push(cloneProduct);

      }
      
      // Save updated state to local storage
      localStorage.setItem('cart', JSON.stringify(state));


    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload.id);
      // Save updated state to local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    clearCart: () => {
      // Clear local storage when cart is cleared
      localStorage.removeItem('cart');
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;