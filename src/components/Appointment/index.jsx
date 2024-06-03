import React from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import { StyledTr, StyledTd, StyledButton } from "./style";

const Appointment = ({
  appointment,
  handleEditAppointment,
  handleDeleteAppointment,
}) => {
  return (
    <StyledTr>
      <StyledTd>{appointment.patientName}</StyledTd>
      <StyledTd>{appointment.doctorName}</StyledTd>
      <StyledTd>{appointment.appointmentDate}</StyledTd>
      <StyledTd>{appointment.complaints}</StyledTd>
      <StyledTd>
        <StyledButton
          type="button"
          onClick={() => handleDeleteAppointment(appointment._id)}
        >
          <img src={drawer} alt="" />
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => handleEditAppointment(appointment._id)}
        >
          <img src={pen} alt="" />
        </StyledButton>
      </StyledTd>
    </StyledTr>
  );
};

export default Appointment;
