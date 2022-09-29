import { createSlice } from "@reduxjs/toolkit";
import { animalsPics, maxLevel } from "../constants";
import { shuffle } from "../utilities/shuffle";

export const currentLevelSlice = createSlice({
  name: "currentLevel",
  initialState: {
    currentLevel: 0,
    sliceNum: 1,
    constantsCards:animalsPics,
    initialLevelCards:[],
    duplicatedLevelCards: [],
  },
  reducers: {
    setLevel: (state,action) => {
      if(action.payload && state.currentLevel<maxLevel){
        state.currentLevel++;
        state.sliceNum += 2;
      }
      state.constantsCards = shuffle(state.constantsCards);
      const currentCards = state.constantsCards.slice(0, state.sliceNum);
      state.initialLevelCards = [...currentCards];
      const duplicatedArray = currentCards.concat(currentCards);
      const shuffledArray = shuffle(duplicatedArray);
      state.duplicatedLevelCards = [...shuffledArray];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLevel } = currentLevelSlice.actions;

export default currentLevelSlice.reducer;
