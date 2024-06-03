import { useState } from "react";
import Header from "../../Header";
import FormData from "../../FormData";
import CustomInput from "../../CustomInput";
import useAction from "../../../hooks/useAction";
import { validateInput } from "../../../helpers/validatePassword";
import { StyledWrapper } from "./style";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    login: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    loginError: "",
    passwordError: "",
    passwordConfirmError: "",
  });

  const { registerUser } = useAction();

  const handleChangeInput = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser.login.trim().length < 6) {
      setError({
        ...error,
        loginError: "Длина логина должна быть не менее 6 символов.",
      });
      return;
    }

    if (!validateInput(newUser.password.trim())) {
      setError({
        ...error,
        passwordError:
          "Пароль должен быть длиной не менее 6 символов, содержать хотя бы одну латинскую букву и одну цифру.",
      });
      return;
    }

    if (newUser.passwordConfirm.trim() !== newUser.password.trim()) {
      setError({
        ...error,
        passwordConfirmError: "Пароли не совпадают,попробуйте ещё раз",
      });
      return;
    }
    const trimmedLogin = newUser.login.trim();
    const trimmedPassword = newUser.password.trim();

    registerUser({
      ...newUser,
      login: trimmedLogin,
      password: trimmedPassword,
    });

    setError({
      loginError: "",
      passwordError: "",
      passwordConfirmError: "",
    });
    setNewUser({
      login: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <StyledWrapper>
      <Header title="Зарегистрироваться в системе" isShowButton={false} />
      <FormData
        handleSubmit={handleSubmit}
        title="Регистрация"
        buttonText="Зарегистрироваться"
        linkText="Авторизоваться"
        linkUrl="/authorization"
      >
        <CustomInput
          error={error}
          name="login"
          type="text"
          value={newUser.login}
          handleChangeInput={handleChangeInput}
          placeholder="Логин"
          label="Логин:"
          required
        />
        <CustomInput
          error={error}
          name="password"
          type="password"
          value={newUser.password}
          handleChangeInput={handleChangeInput}
          placeholder="Пароль"
          label="Пароль:"
          required
        />
        <CustomInput
          error={error}
          name="passwordConfirm"
          type="password"
          value={newUser.passwordConfirm}
          handleChangeInput={handleChangeInput}
          placeholder="Повторить пароль"
          label="Повторить пароль:"
          required
        />
      </FormData>
    </StyledWrapper>
  );
};

export default Registration;
