import { GrPowerReset } from "react-icons/gr";
import PubSub from "pubsub-js";
import { useDispatch } from "react-redux";
import { resetTimer } from "../redux/timer";
import "./ResetButton.scss";

const ResetButton = () => {
  const dispatch = useDispatch();

  const resetGame = () => {
    PubSub.publish("resetGame");
    dispatch(resetTimer());
  };
  
  return (
    <button className="reset-button" onClick={resetGame}>
      <GrPowerReset className="reset-icon" />
    </button>
  );
};

export default ResetButton;
