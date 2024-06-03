import CustomInput from "../CustomInput";
import CustomSelector from "../CustomSelector";
import Modal from "../Modal";
import { StyledWrapperInput } from "./style";

const EditAppointmentModal = ({
  appointment,
  error,
  handleChangeInput,
  doctors,
  handleEditModalClose,
  handleEditSave,
}) => {
  return (
    <Modal
      title="Изменить приём"
      titleButton="Сохранить"
      isCloseModal={handleEditModalClose}
      handleSave={handleEditSave}
    >
      <StyledWrapperInput>
        <CustomInput
          error={error}
          name="patientName"
          type="text"
          value={appointment.patientName}
          handleChangeInput={handleChangeInput}
          label="Имя:"
          required
        />
        <CustomSelector
          value={doctors}
          // option={appointment.doctorName}
          title={appointment.doctorName}
          name="doctorName"
          handleChangeInput={handleChangeInput}
          label="Врач:"
          required
        />
        <CustomInput
          error={error}
          name="appointmentDate"
          type="date"
          value={appointment.appointmentDate}
          handleChangeInput={handleChangeInput}
          label="Дата:"
          required
        />
        <CustomInput
          error={error}
          name="complaints"
          type="text"
          value={appointment.complaints}
          handleChangeInput={handleChangeInput}
          label="Жалобы:"
          required
        />
      </StyledWrapperInput>
    </Modal>
  );
};

export default EditAppointmentModal;
