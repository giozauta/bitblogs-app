import HomeMainViews from "@/pages/home/views/home-main";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";

export const HOME_ROUTES = [<Route path={Default_Layout_Paths.HOME} element={<HomeMainViews />} />];
