import { createSlice } from "@reduxjs/toolkit";
import { initialMinutes, initialSeconds } from "../constants";
export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    minutes: initialMinutes,
    seconds: initialSeconds,
    isPaused: false
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
    pauseTimer: (state) => {
      state.isPaused = !state.isPaused;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementMinutes,
  decrementSeconds,
  setSecondsByAmount,
  resetTimer,
  pauseTimer
} = timerSlice.actions;

export default timerSlice.reducer;
