import CardsContainer from "../CardsContainer";
import SideMenu from "../SideMenu";
import "./ContentWrapper.scss";

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <SideMenu />
      <CardsContainer />
    </div>
  );
};
export default ContentWrapper;