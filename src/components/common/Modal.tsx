import { ReactNode } from "react";
import { ModalContainer, ModalContent, CloseButton } from "../../styles/common/Modal";

interface ModalProps {
    isVisible: boolean;
    children: ReactNode;
    onClose: Function;
}

const Modal = ({ children, isVisible, onClose }: ModalProps) => {
  return (
    <ModalContainer isVisible={isVisible}>
      <CloseButton onClick={() => onClose()}>&times;</CloseButton>
      <ModalContent>{children} </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
