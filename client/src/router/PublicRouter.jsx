import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isAuthenticated }) => {
  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PublicRoute;
