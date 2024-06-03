import api from "../../axios";

export const registerUserService = async (userData) => {
  const response = await api.post("/user/registration", userData);
  return response.data;
};

export const loginUserService = async (userData) => {
  const response = await api.post("/user/authorization", userData);
  return response.data;
};
