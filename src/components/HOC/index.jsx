import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent) => {
  const AuthWrapper = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const location = useLocation();

    if (!isAuth) {
      return (
        <Navigate to="/authorization" replace state={{ from: location }} />
      );
    }

    return <WrappedComponent />;
  };

  return AuthWrapper;
};

export default withAuth;
