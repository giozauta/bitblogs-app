import DefaultLayout from "@/layouts/default/DefaultLayout";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_LAYOUT_ROUTES } from "./default-layout";

const NotFoundPage = React.lazy(() => import("@/components/404/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<DefaultLayout />}>
          {DEFAULT_LAYOUT_ROUTES}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
