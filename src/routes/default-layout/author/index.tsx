import HomeAuthor from "@/pages/home/components/home-author";
import { Route } from "react-router-dom";
import { Default_Layout_Paths } from "../index.enum";


export const AUTHOR_ROUTES = [
  <Route path={Default_Layout_Paths.AUTHOR+"/:id"} element={<HomeAuthor />} />,
];

