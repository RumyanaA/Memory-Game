import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { pauseTimer, resetTimer } from "../redux/timer";
import { executeResetEachCard } from "../redux/card";
import { BsFillStarFill } from "react-icons/bs";
import { setLevel } from "../redux/currentLevel";
import "./EndLevelModal.scss";
import { setTotalScore } from "../redux/completionInfo";

const EndLevelModal = ({ isModalOpen, resetProperty }) => {
  const [modalIsOpen, setIsOpen] = useState(isModalOpen);
  const [isNextLevelClicked, setIsNextLevelClicked] = useState(false);
  const { levelTime } = useSelector((state) => state.completionInfo);
  const {levelScore} = useSelector((state)=>state.completionInfo);
  const {totalScore} = useSelector((state)=>state.completionInfo);
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleResetClick = () => {
    setIsOpen(false);
    dispatch(resetTimer());
    dispatch(pauseTimer());
    dispatch(executeResetEachCard(true));
    //resets isEndLevelModalOpen property from cardsContainer component
    resetProperty(false);
  };

  const handleNextLevelClick = () => {
    setIsNextLevelClicked(true);
    handleResetClick();
    dispatch(setLevel(true));
  };

  useEffect(()=>{
    if(!isNextLevelClicked){
      // remove current score from total score
      dispatch(setTotalScore(true));
      setIsNextLevelClicked(false);
    }
  },[dispatch, isNextLevelClicked])

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="Modal"
      contentLabel="Example Modal"
    >
      <div className="level-info">
        <h3 className="level-complete">Level Completed</h3>
        <div className="star-container">
          <BsFillStarFill className="star-icon" />
          <BsFillStarFill className="star-icon" />
          <BsFillStarFill className="star-icon" />
        </div>
        <h5 className="modal-header">Level Time: {levelTime}</h5>
        <h5 className="modal-header">Level Score: {levelScore}</h5>
        <h5 className="modal-header">Total Score: {totalScore}</h5>
      </div>
      <div className="buttons-container">
        <button className="modal-buttons" onClick={handleResetClick}>
          Reset Level
        </button>
        <button className="modal-buttons" onClick={handleNextLevelClick}>
          Next Level
        </button>
      </div>
    </Modal>
  );
};

export default EndLevelModal;
