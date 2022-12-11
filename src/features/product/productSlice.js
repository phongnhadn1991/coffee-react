import { createSlice, createSelector } from '@reduxjs/toolkit';
import dataProducts from '../../dataFake/dataProducts';

const initialState = dataProducts;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('payload product id >> ', action.payload)
    }
  },
});

export const { addToCart } = productSlice.actions;

// Selector
export const selectListProduct = (state) => state.product;
const categoryFilter = (state) => state.category;

export const selectProductFilter = createSelector(
  selectListProduct,
  categoryFilter,
  (product, category) => {
    return (product.filter((p) => p.categoryId === category.categoryFilter))
  }
)

export default productSlice.reducer;
