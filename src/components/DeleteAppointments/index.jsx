import Modal from "../Modal";
import { StyledText } from "./style";

const DeleteAppointmentModal = ({
  handleDeleteModalClose,
  deleteOneAppointment,
}) => {
  return (
    <Modal
      title="Удалить приём"
      titleButton="Удалить"
      isCloseModal={handleDeleteModalClose}
      handleSave={deleteOneAppointment}
    >
      <StyledText>Вы действительно хотите удалить приём ?</StyledText>
    </Modal>
  );
};

export default DeleteAppointmentModal;
