import { lazy } from "react";
import { Route } from "react-router-dom";

const HomeMainViewsLazy = lazy(() => import("@/pages/home/views/home-main"));

export const AUTHOR_ROUTES = [
  <Route path="author/:id" element={<HomeMainViewsLazy />} />,
];
