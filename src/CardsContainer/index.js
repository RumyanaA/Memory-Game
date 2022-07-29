import { useEffect } from "react";
import Card from "../Card";
import { animalsPics } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import {
  setAnimalCards,
  setFirstFlip,
  setCloseCardIds,
  setMatchedCardIds,
  resetCards,
} from "../redux/allCards";
import "./CardsContainer.scss";
const CardsContainer = () => {
  const animalCards = useSelector((state) => state.allCards.animalsPics);
  const matchedCardIds = useSelector((state) => state.allCards.matchedCards);
  const closeCardIds = useSelector((state) => state.allCards.idCardToFlipDown);
  const firstFlip = useSelector((state) => state.allCards.firstFlip);

  const dispatch = useDispatch();

  //duplicate cards and shuffle
  const duplicateAndShuffle = () => {
    const duplicatedArray = animalsPics.concat(animalsPics);
    shuffle(duplicatedArray);
    dispatch(setAnimalCards(duplicatedArray));
  };

  useEffect(() => {
    duplicateAndShuffle();
  }, []);

  useEffect(() => {
    if (matchedCardIds.length === animalsPics.length) {
      //open modal
    }
  }, [matchedCardIds]);

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
          />
        ))}
    </div>
  );
};

export default CardsContainer;
