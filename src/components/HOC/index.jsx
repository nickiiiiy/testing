// import { Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// const withAuth = (WrappedComponent) => {
//   const AuthWrapper = () => {
//     const isAuth = useSelector((state) => state.user.isAuth);
//     const location = useLocation();

//     if (!isAuth) {
//       return (
//         <Navigate to="/authorization" replace state={{ from: location }} />
//       );
//     }

//     return <WrappedComponent />;
//   };

//   return AuthWrapper;
// };

// export default withAuth;


// WithAuthCheck.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const WithAuthCheck = ({ component }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const token = localStorage.getItem("token");

  if (!isAuth || !token) {
    return <Navigate to="/authorization" replace />;
  }

  return component;
};

export default WithAuthCheck;

// App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Authorization from "./components/pages/Authorization";
import Main from "./components/pages/Main";
import WithAuthCheck from "./components/HOC";

const App = () => {
  return (
    <Routes>
      <Route
        path="/authorization"
        element={<Authorization />}
      />
      <Route
        path="/registration"
        element={<Registration />}
      />
      <Route
        path="/"
        element={<WithAuthCheck component={<Main />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;