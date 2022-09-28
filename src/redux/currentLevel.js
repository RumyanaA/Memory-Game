import { createSlice } from "@reduxjs/toolkit";
import { animalsPics } from "../constants";
import { shuffle } from "../utilities/shuffle";

export const currentLevelSlice = createSlice({
  name: "currentLevel",
  initialState: {
    currentLevel: 0,
    sliceNum: 1,
    initialLevelCards:[],
    duplicatedLevelCards: animalsPics,
  },
  reducers: {
    setLevel: (state) => {
      state.currentLevel++;
      state.sliceNum += 2;
      const currentCards = state.duplicatedLevelCards.slice(0, state.sliceNum);
      state.initialLevelCards = [...currentCards];
      const duplicatedArray = currentCards.concat(currentCards);
      const shuffledArray = shuffle(duplicatedArray);
      state.duplicatedLevelCards = [...shuffledArray];
    },
    resetLevel: (state)=>{
        const shuffledArray = (shuffle(state.duplicatedLevelCards));
        state.duplicatedLevelCards =[...shuffledArray];
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLevel, resetLevel } = currentLevelSlice.actions;

export default currentLevelSlice.reducer;
