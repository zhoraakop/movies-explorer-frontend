import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, user, onlyUnAuth, isRegister }) => {
  const location = useLocation();
  console.log('isreg', isRegister);
  console.log('onlyauth', onlyUnAuth);
  console.log('user', user);
  console.log('children', children)
  if (!onlyUnAuth && !user) {
    return <Navigate to={{ pathname: "/" }} />;
  }
  if (onlyUnAuth && user && isRegister) {
    return children;
  }
  if (onlyUnAuth && user && !isRegister) {
    return children;
  }
  return children;
};

export default ProtectedRoute;
