import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("user");
  

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;
