import { createSlice } from "@reduxjs/toolkit";

export const completionInfoSlice = createSlice({
  name: "CompletionInfo",
  initialState: {
    levelNum: 1,
    levelTime:'',
    score:0
  },
  reducers: {
    setlevelNum: (state, action)=>{
        state.levelNum = action.payload;
    },
    setlevelTime: (state, action)=>{
        state.levelTime = action.payload;
    },
    addlevelScore: (state, action)=>{
        state.score += action.payload;
    }
  },
});

export const {
    setlevelNum,
    setlevelTime,
    addlevelScore
} = completionInfoSlice.actions;

export default completionInfoSlice.reducer;