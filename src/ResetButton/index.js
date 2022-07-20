import { GrPowerReset } from "react-icons/gr";
import "./ResetButton.scss";

const ResetButton = () =>{

    return (
        <button className="reset-button"><GrPowerReset className="reset-icon"/></button>
    )
}

export default ResetButton;