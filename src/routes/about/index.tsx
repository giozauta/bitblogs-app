import { lazy } from "react";
import { Route } from "react-router-dom";

const AboutListViewsLazy = lazy(() => import("@/pages/about/views/aboutList"));

export const ABOUT_ROUTES = [
  <Route path="about" element={<AboutListViewsLazy />} />,
];
