import AuthGuard from "@/components/auth-gurad";
import ProfilePage from "@/pages/profile-page";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";

export const PROFILE_ROUTES = [
  <Route
    path={Default_Layout_Paths.PROFILE}
    element={
      <AuthGuard>
        <ProfilePage />
      </AuthGuard>
    }
  />,
];
