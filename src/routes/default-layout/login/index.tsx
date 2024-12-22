import LoginGuard from "@/components/login-guard";
import Authorization from "@/pages/login-in/Login";
import { Route } from "react-router";
import { Default_Layout_Paths } from "../index.enum";

export const LOGIN_ROUTES = [
  <Route
    path={Default_Layout_Paths.LOGIN}
    element={
      <LoginGuard>
        <Authorization />
      </LoginGuard>
    }
  />,
];
