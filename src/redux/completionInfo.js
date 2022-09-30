import { createSlice } from "@reduxjs/toolkit";

export const completionInfoSlice = createSlice({
  name: "CompletionInfo",
  initialState: {
    levelTime:'',
    levelScore:0,
    totalScore:0
  },
  reducers: {
    setlevelTime: (state, action)=>{
        state.levelTime = action.payload;
    },
    setLevelScore:(state,action)=>{
      state.levelScore = action.payload
    },
    setTotalScore(state,action){
      if(action.payload){
        state.totalScore -=state.levelScore
      }else{
        state.totalScore +=state.levelScore
      }
    }
  },
});

export const {
    setlevelTime,
    setLevelScore,
    setTotalScore
} = completionInfoSlice.actions;

export default completionInfoSlice.reducer;