import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import allCardsReducer from "./allCards";

export default configureStore({
  reducer: {
    timer: timerReducer,
    allCards: allCardsReducer,
  },
});
