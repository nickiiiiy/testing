export const validateInput = (input) => {
  const inputRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  return inputRegex.test(input);
};
