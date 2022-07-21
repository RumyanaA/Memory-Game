import { GrPowerReset } from "react-icons/gr";
import PubSub from "pubsub-js";
import "./ResetButton.scss";

const ResetButton = () => {
  const resetGame = () => PubSub.publish("resetGame");
  return (
    <button className="reset-button" onClick={resetGame}>
      <GrPowerReset className="reset-icon" />
    </button>
  );
};

export default ResetButton;
