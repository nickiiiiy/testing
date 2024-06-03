import { Link } from "react-router-dom";
import building from "../../image/Building.svg";
import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledBlock,
  StyledButton,
  StyledText,
} from "./style";

const FormData = ({
  handleSubmit,
  title,
  buttonText,
  linkText,
  linkUrl,
  children,
}) => {
  return (
    <StyledWrapper>
      <img src={building} alt="" />
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>{title}</StyledTitle>
        {children}
        <StyledBlock>
          <StyledButton type="submit">{buttonText}</StyledButton>
          <Link to={linkUrl}>
            <StyledText>{linkText}</StyledText>
          </Link>
        </StyledBlock>
      </StyledForm>
    </StyledWrapper>
  );
};

export default FormData;
