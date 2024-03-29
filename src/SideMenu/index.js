import LevelComponent from "../levelComponent";
import ResetButton from "../ResetButton";
import Timer from "../Timer";
import "./SideMenu.scss";

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <LevelComponent />
      <Timer initialMinute={1} initialSeconds={30} />
      <ResetButton />
    </div>
  );
};

export default SideMenu;
