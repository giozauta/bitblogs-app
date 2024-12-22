import AuthGuard from "@/components/auth-gurad";
import ProfilePage from "@/pages/profile-page";
import { Route } from "react-router-dom";

export const PROFILE_ROUTES = [
  <Route
    path="profilePage"
    element={
      <AuthGuard>
        <ProfilePage />
      </AuthGuard>
    }
  />,
];
