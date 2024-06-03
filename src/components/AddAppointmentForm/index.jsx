import CustomInput from "../CustomInput";
import CustomSelector from "../CustomSelector";
import { StyledForm, StyledButton } from "./style";

const AddAppointmentForm = ({
  error,
  newAppointment,
  handleSubmit,
  handleChangeInput,
  doctors,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <CustomInput
        error={error}
        name="patientName"
        type="text"
        value={newAppointment.patientName}
        handleChangeInput={handleChangeInput}
        label="Имя:"
        required
      />
      <CustomSelector
        value={doctors}
        options={newAppointment.doctorName}
        // title={newAppointment.doctorName}
        name="doctorName"
        handleChangeInput={handleChangeInput}
        label="Врач:"
        required
      />
      <CustomInput
        error={error}
        name="appointmentDate"
        type="date"
        value={newAppointment.appointmentDate}
        handleChangeInput={handleChangeInput}
        label="Дата:"
        required
      />
      <CustomInput
        error={error}
        name="complaints"
        type="text"
        value={newAppointment.complaints}
        handleChangeInput={handleChangeInput}
        label="Жалобы:"
        required
      />
      <StyledButton type="submit">Добавить</StyledButton>
    </StyledForm>
  );
};

export default AddAppointmentForm;
