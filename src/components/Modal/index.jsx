import Portal from "../Portal";
import {
  StyledOverlay,
  StyledModal,
  StyledButtonWrapper,
  StyledButton,
  StyledButtonSubmit,
  StyledTitle,
} from "./style";

const Modal = ({ children, isCloseModal, title, handleSave, titleButton }) => {
  return (
    <Portal>
      <StyledOverlay>
        <StyledModal>
          <StyledTitle>{title}</StyledTitle>
          {children}
          <StyledButtonWrapper>
            <StyledButton type="button" onClick={isCloseModal}>
              Отмена
            </StyledButton>
            <StyledButtonSubmit type="button" onClick={handleSave}>
              {titleButton}
            </StyledButtonSubmit>
          </StyledButtonWrapper>
        </StyledModal>
      </StyledOverlay>
    </Portal>
  );
};

export default Modal;
