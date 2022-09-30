/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialMinutes, initialSeconds } from "../constants";
import Card from "../Card";
import EndGameModal from "../EndLevelModal";
import {
  setFirstFlip,
  setCloseCardIds,
  setMatchedCardIds,
  resetCards,
} from "../redux/matchedCards";
import { setLevel } from "../redux/currentLevel";
import { pauseTimer } from "../redux/timer";
import { setLevelScore, setlevelTime, setTotalScore } from "../redux/completionInfo";
import "./CardsContainer.scss";
const CardsContainer = () => {
  const [isEndLevelModalOpen, setIsEndLevelModalOpen] = useState(false);
  const initialCards = useSelector((state)=>state.currentLevel.initialLevelCards);
  const currentLevelCards = useSelector((state)=>state.currentLevel.duplicatedLevelCards);
  const matchedCardIds = useSelector((state) => state.matchedCards.matchedCards);
  const closeCardIds = useSelector((state) => state.matchedCards.idCardToFlipDown);
  const firstFlip = useSelector((state) => state.matchedCards.firstFlip);
  const { minutes, seconds } = useSelector((state) => state.timer);
  const {currentLevel} = useSelector((state)=>state.currentLevel);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLevel(true));
  }, [dispatch]);

  const calculateTimePassed = () =>{
    let minutesPassed = initialMinutes - minutes;
    let secondsPassed = initialSeconds - seconds;
    if(secondsPassed<0){
      minutesPassed -= minutesPassed;
      secondsPassed = secondsPassed +60;
    }
    return (`${minutesPassed}:${secondsPassed < 10 ? `0${secondsPassed}` : secondsPassed}`)
  }

  const calculateLevelScore = ()=>{
    const rawCalculation = currentLevel*`${minutes}.${seconds}`;
    const fixedCalculation = rawCalculation.toFixed(2);
    const finalCalculation = fixedCalculation*100
    return Math.round(finalCalculation);
  }

  useEffect(() => {
    //open modal
    if (matchedCardIds.length && matchedCardIds.length === initialCards.length) {
      dispatch(pauseTimer());
      const score = calculateLevelScore();
      dispatch(setLevelScore(score));
      dispatch(setTotalScore(false));
      const timePassed = calculateTimePassed();
      dispatch(setlevelTime(timePassed));
      setTimeout(setIsEndLevelModalOpen, 500, true);
    }
  }, [dispatch, matchedCardIds]);

  // executes when first card is flipped
  const flipFirstCard = (cardId) => {
    dispatch(setFirstFlip(cardId));
  };

  //executes when second card is flipped
  const flipSecondCard = (cardId) => {
    if (firstFlip !== cardId) {
      //if cards are not the same - flip them down
      dispatch(setCloseCardIds([firstFlip, cardId]));
    } else {
      const newMatchedCards = Object.assign([], matchedCardIds);
      newMatchedCards.push(cardId);
      dispatch(setMatchedCardIds(newMatchedCards));
    }
    dispatch(setFirstFlip(""));
  };

  //reset all states and re-shuffle cards on reset button click
  const resetGameCards = () => {
    dispatch(resetCards());
    dispatch(setLevel(false));
  };
  return (
    <div className="cards-container">
      {currentLevelCards?.length &&
        currentLevelCards.map((animalPic, index) => (
          <Card
            animal={animalPic}
            matchedCards={matchedCardIds}
            idCardToFlipDown={closeCardIds}
            hasFirstFlip={firstFlip !== ""}
            flipFirstCard={flipFirstCard}
            flipSecondCard={flipSecondCard}
            resetAllCards={resetGameCards}
            cardId={index}
            key={index}
          />
        ))}
      <EndGameModal isModalOpen={isEndLevelModalOpen} resetProperty = {setIsEndLevelModalOpen} />
    </div>
  );
};

export default CardsContainer;
