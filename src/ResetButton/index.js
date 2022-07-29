import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { resetTimer } from "../redux/timer";
import { executeResetEachCard } from "../redux/card";

import "./ResetButton.scss";

const ResetButton = () => {
  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch(resetTimer());
    dispatch(executeResetEachCard(true));
  };
  
  return (
    <button className="reset-button" onClick={resetGame}>
      <GrPowerReset className="reset-icon" />
    </button>
  );
};

export default ResetButton;
