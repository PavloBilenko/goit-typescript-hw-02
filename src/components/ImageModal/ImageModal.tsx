import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface Image {
  urls: { regular: string };
  alt_description: string;
}

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s["modal-content"]}
      overlayClassName={s["modal-overlay"]}
    >
      <button className={s["close-button"]} onClick={onClose}>
        ×
      </button>
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
