import { Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";
import { PropsWithChildren } from "react";

const LoginGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default LoginGuard;
