import AuthGuard from "@/components/auth-gurad";
import Write from "@/pages/write/Write";
import { Route } from "react-router-dom";

export const WRITE_ROUTES = [
  <Route
    path="write"
    element={
      <AuthGuard>
        <Write />
      </AuthGuard>
    }
  />,
];
