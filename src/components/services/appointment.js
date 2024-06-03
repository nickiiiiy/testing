import api from "../../axios";

export const getAppointmentService = async () => {
  const response = await api.get("/appointment");
  return response.data;
};

export const createAppointmentService = async (appointmentData) => {
  const response = await api.post("/appointment", appointmentData);
  return response.data;
};

export const editAppointmentService = async (appointment) => {
  const response = await api.patch(
    `/appointment/${appointment._id}`,
    appointment
  );
  return response.data;
};

export const deleteAppointmentService = async (appointment) => {
  const response = await api.delete(`/appointment/${appointment._id}`);
  return response.data;
};
