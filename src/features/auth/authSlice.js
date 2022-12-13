import { createSlice } from '@reduxjs/toolkit';

const userAuthLocal = JSON.parse(localStorage.getItem('userAuth_cofeeReact'))

const initialState = {
  authUser: userAuthLocal || {},
  isAuthencation: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAuthUser: (state,action) => {
        state.isAuthencation = false
    },
    loginAuthUser: (state,action) => {
        state.authUser = action.payload
        state.isAuthencation = true
        localStorage.setItem('userAuth_cofeeReact', JSON.stringify(action.payload))
    }
  },
});

export const { logoutAuthUser, loginAuthUser } = authSlice.actions;

// Selector
export const selectAuthUser = (state) => state.auth.authUser;
export const selectAuthencation = (state) => state.auth.isAuthencation;

export default authSlice.reducer;
