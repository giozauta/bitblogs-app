import { lazy } from "react";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";

const AboutListViewsLazy = lazy(() => import("@/pages/about/views/aboutList"));

export const ABOUT_ROUTES = [
  <Route path={Default_Layout_Paths.ABOUT} element={<AboutListViewsLazy />} />,
];
