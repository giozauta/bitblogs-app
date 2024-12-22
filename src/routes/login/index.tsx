import LoginGuard from "@/components/login-guard";
import Authorization from "@/pages/login-in/Login";
import { Route } from "react-router";

export const LOGIN_ROUTES = [
  <Route
    path="login"
    element={
      <LoginGuard>
        <Authorization />
      </LoginGuard>
    }
  />,
];
