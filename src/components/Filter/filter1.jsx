import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// ... остальные импорты

const Main = () => {
  // ... остальные состояния и функции

  // Состояние для фильтрации по дате
  const [dateFilter, setDateFilter] = useState({ from: null, to: null });

  // Функция для обновления фильтрации по дате
  const updateDateFilter = (from, to) => {
    setDateFilter({ from, to });
  };

  // Функция для очистки фильтрации по дате
  const clearDateFilter = () => {
    setDateFilter({ from: null, to: null });
  };

  // Функция для фильтрации приемов по дате
  const filterAppointmentsByDate = (appointments, from, to) => {
    return appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointmentDate);
      if (from && appointmentDate < new Date(from)) return false;
      if (to && appointmentDate > new Date(to)) return false;
      return true;
    });
  };

  // Фильтруем приемы при каждом изменении фильтрации
  const filteredAppointments = filterAppointmentsByDate(appointments, dateFilter.from, dateFilter.to);

  // ... остальная логика компонента

  return (
    <StyledWrapper>
      {/* ... остальная разметка */}
      <AppointmentList
        appointments={filteredAppointments}
        handleEditAppointment={handleEditAppointment}
        handleDeleteAppointment={handleDeleteAppointment}
      />
      {/* ... остальная разметка */}
    </StyledWrapper>
  );
};

export default Main;


// DateFilter.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const DateFilter = ({ updateDateFilter, clearDateFilter }) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const handleApplyFilter = () => {
    updateDateFilter(from, to);
  };

  const handleClearFilter = () => {
    setFrom(null);
    setTo(null);
    clearDateFilter();
  };

  return (
    <div>
      <TextField
        label="От"
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <TextField
        label="До"
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Button onClick={handleApplyFilter}>Фильтровать</Button>
      <Button onClick={handleClearFilter}>Очистить фильтр</Button>
    </div>
  );
};

export default DateFilter;


// Main.js
// ... остальные импорты
import DateFilter from "./DateFilter";

const Main = () => {
  // ... остальные состояния и функции

  return (
    <StyledWrapper>
      {/* ... остальная разметка */}
      <DateFilter updateDateFilter={updateDateFilter} clearDateFilter={clearDateFilter} />
      <AppointmentList
        appointments={filteredAppointments}
        handleEditAppointment={handleEditAppointment}
        handleDeleteAppointment={handleDeleteAppointment}
      />
      {/* ... остальная разметка */}
    </StyledWrapper>
  );
};

export default Main;