import styled from "styled-components";

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const StyledTd = styled.td`
  padding: 8px;
  border-right: 1px solid #000;
  text-align: center;
  background-color: #fff;
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0px;
  margin: 0 15px;
`;
