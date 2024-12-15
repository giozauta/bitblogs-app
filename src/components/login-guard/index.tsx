import { Navigate } from "react-router-dom";

import { PropsWithChildren } from "react";

const LoginGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("user");

  console.log(localStorage.getItem("user"));
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default LoginGuard;
