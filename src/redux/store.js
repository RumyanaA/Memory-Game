import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import allCardsReducer from "./allCards";
import cardReducer from "./card";

export default configureStore({
  reducer: {
    timer: timerReducer,
    allCards: allCardsReducer,
    card: cardReducer
  },
});
