//praveen madanayake  IT21181788
import { createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
 cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
 cartTotalQuantity: 0,
 cartTotalAmount: 0,
};

const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${action.payload.name} quantity`, { position: 'bottom-left' });
        console.log(state.cartItem[itemIndex].cartQuantity);
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 ,size: 'Small'};
        state.cartItem.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, { position: 'bottom-left' });
      }
      state.cartTotalQuantity = state.cartItem.reduce((total, item) => total + item.cartQuantity, 0);
      state.cartTotalAmount = state.cartItem.reduce((total, item) => total + item.cartQuantity * item.price, 0);

      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
        const nextCartItems = state.cartItem.filter(cartItem => cartItem._id !== action.payload._id);
        state.cartItem = nextCartItems;
        localStorage.setItem('cart', JSON.stringify(state.cartItem)); // Corrected key
        toast.error(`${action.payload.name} Remove from cart`, { position: 'bottom-left' });
       },

    decreaseCart(state,action){
        const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload._id);
       if (state.cartItem[itemIndex].cartQuantity > 1){
              state.cartItem[itemIndex].cartQuantity -= 1;
              toast.info(`Decreased ${action.payload.name} quantity`, { position: 'bottom-left' });


       }
       else if (state.cartItem[itemIndex].cartQuantity === 1){
        const nextCartItems = state.cartItem.filter(cartItem => cartItem._id !== action.payload._id);
        state.cartItem = nextCartItems;
        localStorage.setItem('cart', JSON.stringify(state.cartItem)); // Corrected key
        toast.error(`${action.payload.name} Remove from cart`, { position: 'bottom-left' });
        }
    
    },
    clearCart(state,action) {
       state.cartItem = [];
       toast.error(`Clear Cart`, { position: 'bottom-left' });
     localStorage.setItem('cart', JSON.stringify(state.cartItem)); // Corrected key
  },
  updateSize(state, action) {
    const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload.id);
    if (itemIndex >= 0) {
       state.cartItem[itemIndex].size = action.payload.size;
       toast.info(`Size updated for ${action.payload.name}`, { position: 'bottom-left' });
    }
    localStorage.setItem('cart', JSON.stringify(state.cartItem));
   },


       
    }
}
);

export const { addToCart, removeFromCart, decreaseCart,clearCart ,updateSize} = cartSlice.actions;
export default cartSlice.reducer;
