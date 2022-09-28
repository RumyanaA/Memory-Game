import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import matchedCardsReducer from "./matchedCards";
import cardReducer from "./card";
import completionInfoReducer from "./completionInfo";
import currentLevelReducer from "./currentLevel";

export default configureStore({
  reducer: {
    timer: timerReducer,
    matchedCards: matchedCardsReducer,
    card: cardReducer,
    completionInfo: completionInfoReducer,
    currentLevel: currentLevelReducer
  },
});
