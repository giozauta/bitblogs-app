import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default/DefaultLayout";
import Authorization from "./pages/login-in/Login";
import Registration from "./pages/sign-up/SignUp";
import HomeAuthorView from "./pages/home/views/home-author";
import ProfilePage from "./pages/profile-page";
import { supabase } from "./supabase";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import AuthGuard from "./components/auth-gurad";
import LoginGuard from "./components/login-guard";
import Write from "./pages/write/Write";

const HomeMainViews = React.lazy(
  () => import("./pages/home/views/home-main/index"),
);
const NotFoundPage = React.lazy(() => import("./components/404/NotFoundPage"));
const AboutListViews = React.lazy(
  () => import("./pages/about/views/aboutList/index"),
);

function App() {
  const [, setUser] = useAtom(userAtom);

  // Retrieve and persist user session
  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session);
        localStorage.setItem("userSession", JSON.stringify(session));
      }
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
      if (session) {
        localStorage.setItem("userSession", JSON.stringify(session));
      } else {
        localStorage.removeItem("userSession");
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomeMainViews />} />
          <Route path="author/:id" element={<HomeAuthorView />} />
          <Route path="about" element={<AboutListViews />} />

          <Route
            path="login"
            element={
              <LoginGuard>
                <Authorization />
              </LoginGuard>
            }
          />

          <Route
            path="register"
            element={
              <LoginGuard>
                <Registration />
              </LoginGuard>
            }
          />
          <Route
            path="profilePage"
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          />
          <Route
            path="write"
            element={
              <AuthGuard>
                <Write />
              </AuthGuard>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
