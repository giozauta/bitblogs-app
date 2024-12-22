import AuthGuard from "@/components/auth-gurad";
import Write from "@/pages/write/Write";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";

export const WRITE_ROUTES = [
  <Route
    path={Default_Layout_Paths.WRITE}
    element={
      <AuthGuard>
        <Write />
      </AuthGuard>
    }
  />,
];
