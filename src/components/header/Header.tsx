import i18next from "i18next";
import { useTranslation } from "react-i18next";
import LangButton from "./components/lang-button/LangButton";
import { ThemeModeToggle } from "./components/mode-toggle/ModeToggle";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userAtom, userIconAtom } from "@/store/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const Header: React.FC = () => {
  const { t } = useTranslation();
  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };
  const user = useAtomValue(userAtom);
  const userIcon = useAtomValue(userIconAtom);



  return (
    <div className="header border-b">
      <div className="header Container container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="headerIcon text-2xl font-bold">
          BitBlogs
        </Link>
        <nav className="headerNavbar hidden md:flex space-x-4">
          <Link
            to="/"
            className="navBarALink text-muted-foreground hover:text-foreground"
          >
            {t("header.Home")}
          </Link>
          <Link
            to="/write"
            className="navBarALink text-muted-foreground hover:text-foreground"
          >
            {t("header.Write")}
          </Link>
          <Link
            to="/about"
            className="navBarALink text-muted-foreground hover:text-foreground"
          >
            {t("header.About")}
          </Link>
        </nav>
        <div className="headerButtonsContainer flex items-center space-x-4">
          <button className="loop relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>

          {!user ? (
            <Link to="login">
              <div className="headerSingIn nline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4  text-primary-foreground shadow hover:bg-blue-500 h-9 px-4 py-2 bg-blue-600">
                Sign In
              </div>
            </Link>
          ) : (
            <Link className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full justify-center items-center border-2 border-blue-500"  to="/profilePage">
              <Avatar >
                <AvatarImage className="w-full h-full"  src={userIcon ?? ""} />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
            </Link>
          )}

          <LangButton handleChangeLanguage={handleChangeLanguage} />
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
