import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animalsPics, initialMinutes, initialSeconds } from "../constants";
import Card from "../Card";
import EndGameModal from "../EndLevelModal";
import {
  setAnimalCards,
  setFirstFlip,
  setCloseCardIds,
  setMatchedCardIds,
  resetCards,
} from "../redux/allCards";
import { pauseTimer } from "../redux/timer";
import { setlevelTime } from "../redux/completionInfo";
import "./CardsContainer.scss";
const CardsContainer = () => {
  const [isEndLevelModalOpen, setIsEndLevelModalOpen] = useState(false);
  const animalCards = useSelector((state) => state.allCards.animalsPics);
  const matchedCardIds = useSelector((state) => state.allCards.matchedCards);
  const closeCardIds = useSelector((state) => state.allCards.idCardToFlipDown);
  const firstFlip = useSelector((state) => state.allCards.firstFlip);
  const { minutes, seconds } = useSelector((state) => state.timer);

  const dispatch = useDispatch();

  //duplicate cards and shuffle
  const duplicateAndShuffle = useCallback(() => {
    const duplicatedArray = animalsPics.concat(animalsPics);
    shuffle(duplicatedArray);
    dispatch(setAnimalCards(duplicatedArray));
  }, [dispatch]);

  useEffect(() => {
    duplicateAndShuffle();
  }, [duplicateAndShuffle]);

  const calculateTimePassed = () =>{
    let minutesPassed = initialMinutes - minutes;
    let secondsPassed = initialSeconds - seconds;
    if(secondsPassed<0){
      minutesPassed -= minutesPassed;
      secondsPassed = secondsPassed +60;
    }
    return (`${minutesPassed}:${secondsPassed < 10 ? `0${secondsPassed}` : secondsPassed}`)
  }
  useEffect(() => {
    //open modal
    if (matchedCardIds.length === animalsPics.length) {
      dispatch(pauseTimer());
      const timePassed = calculateTimePassed();
      dispatch(setlevelTime(timePassed));
      setTimeout(setIsEndLevelModalOpen, 500, true);
    }
  }, [dispatch, matchedCardIds]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

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
    duplicateAndShuffle();
  };
  return (
    <div className="cards-container">
      {animalCards?.length === 12 &&
        animalCards.map((animalPic, index) => (
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
      <EndGameModal isModalOpen={isEndLevelModalOpen} />
    </div>
  );
};

export default CardsContainer;
