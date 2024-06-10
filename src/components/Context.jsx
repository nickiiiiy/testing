import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Создаем контекст
export const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  // Обновляем название страницы при изменении пути
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Приёмы");
        break;
      case "/registration":
        setTitle("Зарегистрироваться в системе");
        break;
      case "/authorisation":
        setTitle("Вход в систему");
        break;
      default:
        setTitle("");
    }
  }, [location.pathname]);

  return (
    <HeaderContext.Provider value={{ title }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;



import React, { useContext } from "react";
import { HeaderContext } from "./HeaderContext";
import logo from "../../image/logo.svg";
import { StyledBlock, StyledImage, StyledTitle, StyledButton } from "./style";

const Header = ({ isShowButton, handleActionButton }) => {
  const { title } = useContext(HeaderContext);

  return (
    <StyledBlock>
      <StyledImage src={logo} alt="" />
      <StyledTitle>{title}</StyledTitle>
      {isShowButton && (
        <StyledButton onClick={handleActionButton}>Выход</StyledButton>
      )}
    </StyledBlock>
  );
};

export default Header;


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import HeaderContextProvider from "./HeaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </Provider>
  </BrowserRouter>
);