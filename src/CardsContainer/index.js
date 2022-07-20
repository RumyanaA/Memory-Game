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
  useEffect(() => {
    const duplicatedArray = animalsPics.concat(animalsPics);
    shuffle(duplicatedArray);
    setAnimalCards([...duplicatedArray]);
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
      setCloseCardIds([firstFlip, cardId]); //if cards are not the same - flip them down
    } else {
      const newMatchedCards = matchedCardIds;
      newMatchedCards.push(cardId); // if cards are a match - push them in array
                                    // and set them flipped up
      setMatchedCardIds([...newMatchedCards]);
    }
    setFirstFlip("");
  };
  return (
    <div className="cards-container">
      {animalCards?.map((animalPic) => (
        <Card
          animal={animalPic}
          matchedCards={matchedCardIds}
          idCardToFlipDown={closeCardIds}
          hasFirstFlip={firstFlip !== ""}
          flipFirstCard={flipFirstCard}
          flipSecondCard={flipSecondCard}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
