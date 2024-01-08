import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
const initialState ={
    authState: false,
}
// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState: (state, action) => {
      return {
        authState: action.payload
      }
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       return {
//         ...state,
//         ...action.payload.auth,
//       };
//     },
//   },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;