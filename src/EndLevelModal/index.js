import { useEffect, useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const EndLevelModal = ({ isModalOpen }) => {
  const [modalIsOpen, setIsOpen] = useState(isModalOpen);

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
};

export default EndLevelModal;
