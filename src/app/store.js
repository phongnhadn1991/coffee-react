import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import counterReducer from '../features/counter/counterSlice';
import ProductSlice from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: ProductSlice,
    category: categorySlice
  },
});
