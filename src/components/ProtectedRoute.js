import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, user, onlyUnAuth }) => {
  const location = useLocation();

  if (onlyUnAuth && user?.email) {
    const from = location.state?.from || { pathname: "/movies" };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user?.email) {
    return (
      <Navigate
        to={{ pathname: "/signin" }}
        state={{ from: location }}
      />
    );
  }
  return children;
};

export default ProtectedRoute;
