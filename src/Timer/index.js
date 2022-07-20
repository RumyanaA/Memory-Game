import { useEffect, useState } from "react";
import "./Timer.scss";

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
    
        return (
            <div className="time-wrapper">
                <img className="timer-img" alt="timer" src="timer.jpg"></img>
             <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3> 
            </div>
        )
};

export default Timer;
