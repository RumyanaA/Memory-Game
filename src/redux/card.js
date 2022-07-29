import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    isResetClicked:false
  },
  reducers: {
    executeResetEachCard: (state, action)=>{
        state.isResetClicked = action.payload;
    }
  },
});

export const {
    executeResetEachCard
} = cardSlice.actions;

export default cardSlice.reducer;
