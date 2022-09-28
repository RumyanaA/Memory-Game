import { createSlice } from "@reduxjs/toolkit";

export const matchedCardsSlice = createSlice({
  name: "matchedCards",
  initialState: {
    matchedCards: [],
    idCardToFlipDown: [],
    firstFlip: "",
  },
  reducers: {
    setFirstFlip: (state, action) => {
      state.firstFlip = action.payload;
    },
    setCloseCardIds: (state, action) => {
      state.idCardToFlipDown = action.payload;
    },
    setMatchedCardIds: (state, action) => {
      state.matchedCards = [...action.payload];
    },
    resetCards: (state) => {
        state.firstFlip = "";
        state.idCardToFlipDown = [];
        state.matchedCards =[];
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstFlip,
  setCloseCardIds,
  setMatchedCardIds,
  resetCards
} = matchedCardsSlice.actions;

export default matchedCardsSlice.reducer;
