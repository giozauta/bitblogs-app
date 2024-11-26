import { PropsWithChildren } from "react";
import Footer from "../../components/footer/Footer";
import MainModule from "../../components/main-module/MainModule";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";

const DefaultLayout: React.FC<PropsWithChildren> = () => {
  return (
    <div className="layoutContainer min-h-screen bg-background text-foreground flex flex-col">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <MainModule>
          <Outlet />
        </MainModule>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default DefaultLayout;
