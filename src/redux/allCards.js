import { createSlice } from "@reduxjs/toolkit";
import { animalsPics } from "../constants";

export const allCardSlice = createSlice({
  name: "allCards",
  initialState: {
    animalsPics,
    matchedCards: [],
    idCardToFlipDown: [],
    firstFlip: "",
  },
  reducers: {
    setAnimalCards: (state, action) => {
      state.animalsPics = [...action.payload];
    },
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
  setAnimalCards,
  setFirstFlip,
  setCloseCardIds,
  setMatchedCardIds,
  resetCards
} = allCardSlice.actions;

export default allCardSlice.reducer;
