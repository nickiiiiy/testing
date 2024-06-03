import { useState } from "react";
import Header from "../../Header";
import FormData from "../../FormData";
import CustomInput from "../../CustomInput";
import useAction from "../../../hooks/useAction";
import { StyledWrapper } from "./style";

const Authorization = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState({
    userError: "",
    passwordError: "",
  });
  const { loginUser } = useAction();

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.login.trim()) {
      setError({ ...error, userError: "Поле не может быть пустым " });
      return;
    }

    e.preventDefault();
    if (!user.password.trim()) {
      setError({ ...error, passwordError: "Поле не может быть пустым " });
      return;
    }
    const trimmedLogin = user.login.trim();
    const trimmedPassword = user.password.trim();

    loginUser({
      ...user,
      login: trimmedLogin,
      password: trimmedPassword,
    });

    setError({
      userError: "",
      passwordError: "",
    });
    setUser({
      login: "",
      password: "",
    });
  };

  return (
    <StyledWrapper>
      <Header title="Войти в систему" isShowButton={false} />
      <FormData
        handleSubmit={handleSubmit}
        title="Войти в систему"
        buttonText="Войти"
        linkText="Зарегистрироваться"
        linkUrl="/registration"
      >
        <CustomInput
          error={error}
          name="login"
          type="text"
          value={user.login}
          handleChangeInput={handleChangeInput}
          placeholder="Логин"
          label="Логин:"
          required
        />
        <CustomInput
          error={error}
          name="password"
          type="password"
          value={user.password}
          handleChangeInput={handleChangeInput}
          placeholder="Пароль"
          label="Пароль:"
          required
        />
      </FormData>
    </StyledWrapper>
  );
};

export default Authorization;
