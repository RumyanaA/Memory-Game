import { useState } from "react";
import "./Card.scss";

const Card = ({animal}) =>{
    const [flip, setFlip] = useState(false)

    const flipCard= ()=>{
        setFlip(true);
        setTimeout(setFlip,1000,false)
    }
    
    return(
        <div className="flip-card-outer">
        <div className={`card ${flip ? 'flip' : ''}`} onClick={flipCard}>
            <div className="card-front" >
            <img className="card-pic" alt="card-front" src="animalsPics/card-back.jpg"></img>
            </div>
            <div className="card-back" >
            <img className="card-pic" alt="card-back" src={`animalsPics/${animal}.jpg`} ></img>
            </div>
        </div> 
        </div>
    )
}

export default Card;