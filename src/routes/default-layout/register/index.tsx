import LoginGuard from "@/components/login-guard";
import Registration from "@/pages/sign-up/SignUp";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";

export const REGISTER_ROUTES = [
  <Route
    path={Default_Layout_Paths.REGISTER}
    element={
      <LoginGuard>
        <Registration />
      </LoginGuard>
    }
  />,
];
