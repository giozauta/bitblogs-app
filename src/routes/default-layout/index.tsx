import { ABOUT_ROUTES } from "./about";
import { AUTHOR_ROUTES } from "./author";
import { HOME_ROUTES } from "./home";
import { LOGIN_ROUTES } from "./login";
import { PROFILE_ROUTES } from "./profile";
import { REGISTER_ROUTES } from "./register";
import { WRITE_ROUTES } from "./write";

export const DEFAULT_LAYOUT_ROUTES = [
  ...HOME_ROUTES,
  ...AUTHOR_ROUTES,
  ...ABOUT_ROUTES,
  ...LOGIN_ROUTES,
  ...REGISTER_ROUTES,
  ...PROFILE_ROUTES,
  ...WRITE_ROUTES,
];
