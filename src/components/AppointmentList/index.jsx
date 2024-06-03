import Appointment from "../Appointment";
import { tableHeaders } from "../../constants";
import {
  StyledWrapper,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTh,
} from "./style";

const AppointmentList = ({
  appointments,
  handleEditAppointment,
  handleDeleteAppointment,
}) => {
  return (
    <StyledWrapper>
      <StyledTable>
        <StyledThead>
          <StyledTr>
            {tableHeaders.map((header, index) => (
              <StyledTh key={index}>{header}</StyledTh>
            ))}
          </StyledTr>
        </StyledThead>
        {appointments ? (
          <StyledTbody>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                handleEditAppointment={handleEditAppointment}
                handleDeleteAppointment={handleDeleteAppointment}
              />
            ))}
          </StyledTbody>
        ) : (
          <p>У вас нет запланированных приёмов.</p>
        )}
      </StyledTable>
    </StyledWrapper>
  );
};

export default AppointmentList;
