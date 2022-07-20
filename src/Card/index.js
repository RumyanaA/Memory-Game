import { useEffect, useState } from "react";
import "./Card.scss";

const Card = ({
  animal,
  matchedCards,
  idCardToFlipDown,
  hasFirstFlip,
  flipFirstCard,
  flipSecondCard,
}) => {
  const [flip, setFlip] = useState(false);
  const [disableFlip, setDisableFlip] = useState(false);

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
      setTimeout(setFlip, 1000, false); //flip down if idCardToFlipDown has current card's animal
    }
    if (matchedCards.includes(animal)) {
      //if card has a match - disable from being clicked
      setDisableFlip(true);
    }
  }, [animal, idCardToFlipDown, matchedCards]);

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
