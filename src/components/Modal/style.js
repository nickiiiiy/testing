import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h3`
  font-size: 36px;
  margin: 4px 20px;
`;

export const StyledModal = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 640px;
  overflow: auto;
  padding: 20px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  float: right;
`;

export const StyledButton = styled.button`
  width: 100px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #00000033;
`;

export const StyledButtonSubmit = styled.button`
  width: 100px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #c5e9ffb8;
  background-color: #c5e9ffb8;
`;
