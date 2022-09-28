import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { pauseTimer, resetTimer } from "../redux/timer";
import { executeResetEachCard } from "../redux/card";
import { BsFillStarFill } from "react-icons/bs";
import "./EndLevelModal.scss";

const EndLevelModal = ({ isModalOpen, resetProperty }) => {
  const [modalIsOpen, setIsOpen] = useState(isModalOpen);
  const { levelTime } = useSelector((state) => state.completionInfo);

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
    setIsOpen(false);
  };

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
        <h5 className="level-time">Level Time: {levelTime}</h5>
        <h5 className="level-time">Level Score: 300</h5>
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
