import LoginGuard from "@/components/login-guard";
import Registration from "@/pages/sign-up/SignUp";
import { Route } from "react-router-dom";

export const REGISTER_ROUTES = [
  <Route
    path="register"
    element={
      <LoginGuard>
        <Registration />
      </LoginGuard>
    }
  />,
];
