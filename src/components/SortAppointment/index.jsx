import CustomSelector from "../CustomSelector";
import { StyledWrapper, StyledSelectorInner } from "./style";

const SortAppointment = ({
  sortConfig,
  sortSelect,
  sortDirect,
  handleSortChange,
}) => {
  return (
    <StyledWrapper>
      <StyledSelectorInner>
        <p>Сортировать по:</p>
        <CustomSelector
          value={sortSelect}
          options={sortConfig.field}
          name="sortSelect"
          handleChangeInput={handleSortChange}
        />
      </StyledSelectorInner>
      {sortConfig.field !== "" && (
        <StyledSelectorInner>
          <p>Направление:</p>
          <CustomSelector
            value={sortDirect}
            // title={sortConfig.direction}
            options={sortConfig.direction}
            name="sortDirect"
            handleChangeInput={handleSortChange}
          />
        </StyledSelectorInner>
      )}
    </StyledWrapper>
  );
};

export default SortAppointment;
