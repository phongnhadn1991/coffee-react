import { createSelector, createSlice } from '@reduxjs/toolkit';

const updateLocalStorage = (cart) => {
  localStorage.setItem('cart',JSON.stringify(cart));
}

const initialState = {
  listCart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemCart = state.listCart.find(item => item.id === action.payload.id)
      if(itemCart){
        itemCart.qty++
      }else{
        state.listCart = [...state.listCart,{...action.payload, qty:1}]
      }
      updateLocalStorage(state.listCart)
      console.log(localStorage.getItem('cart'));
    },
    deleteItemCart: (state,action) => {
      state.listCart = state.listCart.filter(item => item.id !== action.payload)
      updateLocalStorage(state.listCart)
    },
    plusQty: (state,action) => {
      let itemCart = state.listCart.find(item => item.id === action.payload)
      if(itemCart) {
        itemCart.qty++
      }
      updateLocalStorage(state.listCart)
    },
    minusQty: (state,action) => {
      let itemCart = state.listCart.find(item => item.id === action.payload)
      if(itemCart) {
        if(itemCart.qty > 1) {
          itemCart.qty--
        }else {
          state.listCart = state.listCart.filter(item => item.id !== action.payload)
        }
      }
      updateLocalStorage(state.listCart)
    }
  },
});

export const { addToCart, deleteItemCart, plusQty, minusQty } = cartSlice.actions;

// Selector
export const selectListCart = (state) => state.cart.listCart;
export const selectSubToTalCart = createSelector(
  selectListCart,
  (listCart) => {
    let total = 0
    listCart.map((item) => {
       return total += item.price * item.qty
    })
    return total
  }
)

export default cartSlice.reducer;
