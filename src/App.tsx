import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default/DefaultLayout";
import Authorization from "./pages/authorization/Authorization";
import Registration from "./pages/registration/Registration";
import HomeAuthorView from "./pages/home/views/home-author";

const HomeMainViews = React.lazy(
  () => import("./pages/home/views/home-main/index"),
);
const NotFoundPage = React.lazy(() => import("./components/404/NotFoundPage"));
const AboutListViews = React.lazy(
  () => import("./pages/about/views/aboutList/index"),
);

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomeMainViews />} />
          <Route path="author/:id" element={<HomeAuthorView />} />
          <Route path="about" element={<AboutListViews />} />
          <Route path="login" element={<Authorization />} />
          <Route path="register" element={<Registration />} />
          <Route path="" element={<Navigate to="home" />} />
        </Route>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
