import {
  StyledLabel,
  StyledInput,
  StyledBlock,
  StyledBlockError,
} from "./style";

const CustomInput = ({
  error,
  name,
  type,
  value,
  handleChangeInput,
  placeholder,
  label,
  required,
}) => {
  return (
    <StyledBlock>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeInput}
        required={required}
      />
      {error[name + "Error"] && (
        <StyledBlockError>{error[name + "Error"]}</StyledBlockError>
      )}
    </StyledBlock>
  );
};

export default CustomInput;
