import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import AppRoutes from "./routes";

function App() {
  const [, setUser] = useAtom(userAtom);

  // Retrieve and persist user session
  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session);
        localStorage.setItem("userSession", JSON.stringify(session));
      }
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
      if (session) {
        localStorage.setItem("userSession", JSON.stringify(session));
      } else {
        localStorage.removeItem("userSession");
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return <AppRoutes />;
}

export default App;
