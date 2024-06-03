import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 900px;
  margin: 24px auto;
  border-collapse: collapse;
`;

export const StyledThead = styled.thead`
  background-color: #bbbbbb;
`;

export const StyledTbody = styled.tbody`
  border: 1px solid #000;
`;

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const StyledTd = styled.td`
  padding: 8px;
  border: 1px solid #dddddd;
`;

export const StyledTh = styled.th`
  padding: 8px;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  width: 450px;
`;
