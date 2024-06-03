import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Authorization from "./components/pages/Authorization";
import Main from "./components/pages/Main";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/authorization" replace />} />
    </Routes>
  );
};

export default App;
