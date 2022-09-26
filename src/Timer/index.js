/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementSeconds,
  decrementMinutes,
  setSecondsByAmount,
} from "../redux/timer";
import "./Timer.scss";
const Timer = () => {
  const { minutes, seconds } = useSelector((state) => state.timer);
  const {isPaused} = useSelector((state)=> state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isPaused){
    let myInterval = setInterval(() => {
        if (seconds > 0) {
          dispatch(decrementSeconds());
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            dispatch(decrementMinutes());
            dispatch(setSecondsByAmount(59));
          }
        }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }
  });

  return (
    <div className="time-wrapper">
      <img className="timer-img" alt="timer" src="timer.jpg"></img>
      <h3>
        {" "}
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h3>
    </div>
  );
};

export default Timer;
