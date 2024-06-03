import {
  startGetAppointment,
  getAppointmentSuccess,
  getAppointmentError,
  startCreateAppointment,
  createAppointmentSuccess,
  createAppointmentError,
  startEditAppointment,
  editAppointmentSuccess,
  editAppointmentError,
  startDeleteAppointment,
  deleteAppointmentSuccess,
  deleteAppointmentError,
} from "../actions/appointment";
import {
  getAppointmentService,
  createAppointmentService,
  editAppointmentService,
  deleteAppointmentService,
} from "../../components/services/appointment";

export const getAppointment = () => {
  return async (dispatch) => {
    try {
      dispatch(startGetAppointment());

      const response = await getAppointmentService();
      dispatch(getAppointmentSuccess(response));
    } catch (error) {
      const errorText = error.response.data;

      dispatch(getAppointmentError(errorText.message));
    }
  };
};

export const createAppointment = (appointmentData) => {
  return async (dispatch) => {
    try {
      dispatch(startCreateAppointment());

      const response = await createAppointmentService(appointmentData);

      dispatch(createAppointmentSuccess(response));
    } catch (error) {
      const errorText = error.response.data;

      dispatch(createAppointmentError(errorText.message));
    }
  };
};

export const editAppointment = (appointment) => {
  return async (dispatch) => {
    try {
      dispatch(startEditAppointment(appointment));

      const response = await editAppointmentService(appointment);

      dispatch(editAppointmentSuccess(response));
    } catch (error) {
      const errorText = error.response.data;

      dispatch(editAppointmentError(errorText.message));
    }
  };
};

export const deleteAppointment = (appointment) => {
  return async (dispatch) => {
    try {
      dispatch(startDeleteAppointment(appointment));

      const response = await deleteAppointmentService(appointment);
      dispatch(deleteAppointmentSuccess(response));
    } catch (error) {
      const errorText = error.response.data;

      dispatch(deleteAppointmentError(errorText));
    }
  };
};
