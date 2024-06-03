import React from "react";

const FilterAppointment = ({
  filterConfig,
  handleFilterChange,
  handleFilterApply,
  handleFilterReset,
}) => {
  return (
    <div>
      <label>От:</label>
      <input
        type="date"
        name="fromDate"
        value={filterConfig.fromDate || ""}
        onChange={handleFilterChange}
      />
      <label>До:</label>
      <input
        type="date"
        name="toDate"
        value={filterConfig.toDate || ""}
        onChange={handleFilterChange}
      />
      <button type="button" onClick={handleFilterApply}>
        Фильтровать
      </button>
      <button type="button" onClick={handleFilterReset}>
        Сброс
      </button>
    </div>
  );
};

export default FilterAppointment;
