import { createSlice } from "@reduxjs/toolkit";

const initialMinutes = 1;
const initialSeconds = 30;
export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    minutes: initialMinutes,
    seconds: initialSeconds,
  },
  reducers: {
    decrementMinutes: (state) => {
      state.minutes -= 1;
    },
    decrementSeconds: (state) => {
      state.seconds -= 1;
    },
    setSecondsByAmount: (state, action) => {
      state.seconds += action.payload;
    },
    resetTimer: (state) => {
      state.minutes = initialMinutes;
      state.seconds = initialSeconds;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementMinutes,
  decrementSeconds,
  setSecondsByAmount,
  resetTimer,
} = timerSlice.actions;

export default timerSlice.reducer;
