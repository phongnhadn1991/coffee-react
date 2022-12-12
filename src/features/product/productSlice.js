import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import dataProducts from '../../dataFake/dataProducts';
import axios from "axios";

const initialState = {
  listProduct: dataProducts,
  isLoading: false,
  listUser: []
};

export const fetchDataProduct = createAsyncThunk("product/fetchDataProduct", async () => {
  const res = await axios.get('https://6177a06f9c328300175f5a35.mockapi.io/users')
  return res.data
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builer) => {
      builer.addCase(fetchDataProduct.pending, (state, action) => {
         state.isLoading = true
      })
      builer.addCase(fetchDataProduct.rejected, (state, action) => {
         state.isLoading = false
      })
      builer.addCase(fetchDataProduct.fulfilled, (state, action) => {
         state.listUser = action.payload
         state.isLoading = false
      })
   },
});

export const { } = productSlice.actions;

// Selector
export const selectListProduct = (state) => state.product.listProduct;
const categoryFilter = (state) => state.category;

export const selectProductFilter = createSelector(
  selectListProduct,
  categoryFilter,
  (listProduct, category) => {
    return (listProduct.filter((p) => p.categoryId === category.categoryFilter))
  }
)

export default productSlice.reducer;
