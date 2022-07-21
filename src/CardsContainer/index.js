import { useEffect, useState } from "react";
import Card from "../Card";
import { animalsPics } from "../constants";
import "./CardsContainer.scss";
const CardsContainer = () => {
  const [animalCards, setAnimalCards] = useState(animalsPics);
  const [firstFlip, setFirstFlip] = useState("");
  const [closeCardIds, setCloseCardIds] = useState([]);
  const [matchedCardIds, setMatchedCardIds] = useState([]);

  //duplicate cards and shuffle
  const duplicateAndShuffle = () => {
    const duplicatedArray = animalsPics.concat(animalsPics);
    shuffle(duplicatedArray);
    setAnimalCards([...duplicatedArray]);
  };

  useEffect(() => {
    duplicateAndShuffle();
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  //executes when first card is flipped
  const flipFirstCard = (cardId) => {
    setFirstFlip(cardId);
  };

  //executes when second card is flipped
  const flipSecondCard = (cardId) => {
    if (firstFlip !== cardId) {
      //if cards are not the same - flip them down
      setCloseCardIds([firstFlip, cardId]);
    } else {
      const newMatchedCards = matchedCardIds;
      // if cards are a match - push them in array
      newMatchedCards.push(cardId);
      setMatchedCardIds([...newMatchedCards]);
    }
    setFirstFlip("");
  };

  //reset all states and re-shuffle cards on reset button click
  const resetGameCards = () => {
    setFirstFlip("");
    setCloseCardIds([]);
    setMatchedCardIds([]);
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
