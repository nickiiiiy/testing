import appointmentEnums from "../enums/appointment";

export const startGetAppointment = (payload) => {
  return {
    type: appointmentEnums.GET_APPOINTMENT,
    payload,
  };
};

export const getAppointmentSuccess = (payload) => {
  return {
    type: appointmentEnums.GET_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const getAppointmentError = (error) => {
  return {
    type: appointmentEnums.GET_APPOINTMENT_ERROR,
    error,
  };
};

export const startCreateAppointment = (payload) => {
  return {
    type: appointmentEnums.CREATE_APPOINTMENT,
    payload,
  };
};

export const createAppointmentSuccess = (payload) => {
  return {
    type: appointmentEnums.CREATE_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const createAppointmentError = (error) => {
  return {
    type: appointmentEnums.CREATE_APPOINTMENT_ERROR,
    error,
  };
};

export const startEditAppointment = (payload) => {
  return {
    type: appointmentEnums.EDIT_APPOINTMENT,
    payload,
  };
};

export const editAppointmentSuccess = (payload) => {
  return {
    type: appointmentEnums.EDIT_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const editAppointmentError = (error) => {
  return {
    type: appointmentEnums.EDIT_APPOINTMENT_ERROR,
    error,
  };
};

export const startDeleteAppointment = (payload) => {
  return {
    type: appointmentEnums.DELETE_APPOINTMENT,
    payload,
  };
};

export const deleteAppointmentSuccess = (payload) => {
  return {
    type: appointmentEnums.DELETE_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const deleteAppointmentError = (error) => {
  return {
    type: appointmentEnums.DELETE_APPOINTMENT_ERROR,
    error,
  };
};
