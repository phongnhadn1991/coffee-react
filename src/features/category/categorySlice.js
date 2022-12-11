import { createSlice } from '@reduxjs/toolkit';
import dataCategories from '../../dataFake/dataCategories';
const initialState = {
    listCategory: dataCategories,
    categoryFilter: null
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    filterCategory: (state,action) => {
        state.categoryFilter = action.payload
    }
  },
});

export const { filterCategory } = categorySlice.actions;

// Selector
export const selectListCategory = (state) => state.category.listCategory;

export default categorySlice.reducer;
