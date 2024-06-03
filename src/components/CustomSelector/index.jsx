import { StyledLabel, StyledBlock, StyledSelect } from "./style";

const CustomSelector = ({
  value,
  options,
  name,
  handleChangeInput,
  label,
  title,
}) => {
  return (
    <StyledBlock>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect name={name} onChange={handleChangeInput} required>
        {value.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </StyledSelect>
    </StyledBlock>
  );
};

export default CustomSelector;
