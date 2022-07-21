import { useEffect, useRef, useState } from "react";
import PubSub from "pubsub-js";
import "./Card.scss";

const Card = ({
  animal,
  matchedCards,
  idCardToFlipDown,
  hasFirstFlip,
  flipFirstCard,
  flipSecondCard,
  resetAllCards,
  cardId
}) => {
  const [flip, setFlip] = useState(false);
  const [disableFlip, setDisableFlip] = useState(false);
  const subscribeEvent = useRef(null);

  const flipCard = () => {
    setFlip(!flip);
  };

  useEffect(() => {
    if (flip) {
      //determines which card is flipped
      if (hasFirstFlip) {
        flipSecondCard(animal);
      } else {
        flipFirstCard(animal);
      }
    } else {
      //if same card is clicked twice - reset property
      flipFirstCard("");
    }
  }, [flip]);

  useEffect(() => {
    if (!matchedCards.includes(animal) && idCardToFlipDown.includes(animal)) {
      setTimeout(setFlip, 800, false); //flip down if idCardToFlipDown has current card's animal
    }
    if (matchedCards.includes(animal)) {
      //if card has a match - disable from being clicked
      setDisableFlip(true);
    }
  }, [animal, idCardToFlipDown, matchedCards]);

  useEffect(() => {
    subscribeEvent.current = PubSub.subscribe("resetGame", resetCard);
    return () => PubSub.unsubscribe(subscribeEvent.current);
  }, []);

  const resetCard = () => {
    console.log('unsubscribe')
    setDisableFlip(false);
    setFlip(false);
    if(cardId===11){
      console.log('hi')
      resetAllCards();
    }
   
  };

  return (
    <div className="flip-card-outer">
      <div
        className={`card ${flip ? "flip" : ""}`}
        id={animal}
        onClick={!disableFlip ? flipCard : undefined}
      >
        <div className="card-front">
          <img
            className="card-pic"
            alt="card-front"
            src="animalsPics/card-back.jpg"
          ></img>
        </div>
        <div className="card-back">
          <img
            className="card-pic"
            alt="card-back"
            src={`animalsPics/${animal}.jpg`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
