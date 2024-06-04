import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddAppointmentForm from "../../AddAppointmentForm";
import Header from "../../Header";
import AppointmentList from "../../AppointmentList";
import EditAppointmentModal from "../../EditAppointments";
import DeleteAppointmentModal from "../../DeleteAppointments";
import { Snackbar } from "@mui/material";
import useAction from "../../../hooks/useAction";
import { doctors } from "../../../constants";
import { StyledWrapper } from "./style";

const Main = () => {
  // ... (rest of the code remains the same)

  const [filterFromDate, setFilterFromDate] = useState(null);
  const [filterToDate, setFilterToDate] = useState(null);

  const handleFilterChange = (e) => {
    if (e.target.name === "fromDate") {
      setFilterFromDate(e.target.value);
    } else {
      setFilterToDate(e.target.value);
    }
  };

  const handleFilterApply = () => {
    const filteredAppointments = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointmentDate);
      if (filterFromDate && filterToDate) {
        return (
          appointmentDate >= filterFromDate && appointmentDate <= filterToDate
        );
      } else if (filterFromDate) {
        return appointmentDate >= filterFromDate;
      } else if (filterToDate) {
        return appointmentDate <= filterToDate;
      } else {
        return true;
      }
    });
    // Update the appointment list with the filtered data
    // ...
  };

  const handleFilterReset = () => {
    setFilterFromDate(null);
    setFilterToDate(null);
    // Reset the appointment list to its original state
    // ...
  };

  return (
    <StyledWrapper>
      <Header title="Приёмы" isShowButton={true} />
      <AddAppointmentForm
        error={error}
        newAppointment={newAppointment}
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        doctors={doctors}
      />
      <AppointmentList
        appointments={appointments}
        handleEditAppointment={handleEditAppointment}
        handleDeleteAppointment={handleDeleteAppointment}
      />
      <div>
        <label>Фильтровать по дате:</label>
        <input
          type="date"
          name="fromDate"
          value={filterFromDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="toDate"
          value={filterToDate}
          onChange={handleFilterChange}
        />
        <button onClick={handleFilterApply}>Фильтровать</button>
        <button onClick={handleFilterReset}>Сбросить фильтр</button>
      </div>
      {isOpenEditModal && (
        <EditAppointmentModal
          error={editError}
          doctors={doctors}
          handleChangeInput={handleInputChange}
          appointment={selectedAppointment}
          handleEditModalClose={handleEditModalClose}
          handleEditSave={handleEditSave}
        />
      )}
      {isOpenDeleteModal && (
        <DeleteAppointmentModal
          handleDeleteModalClose={handleDeleteModalClose}
          deleteOneAppointment={deleteOneAppointment}
        />
      )}
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ open: false, message: "" })}
          message={snackbar.message}
        />
      )}
    </StyledWrapper>
  );
};

export default Main;
