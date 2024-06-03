import logo from "../../image/logo.svg";
import { StyledBlock, StyledImage, StyledTitle, StyledButton } from "./style";

const Header = ({ title, isShowButton }) => {
  return (
    <StyledBlock>
      <StyledImage src={logo} alt="" />
      <StyledTitle>{title}</StyledTitle>
      {isShowButton && 
        <StyledButton>Выход</StyledButton>
      }
    </StyledBlock>
  );
};

export default Header;
