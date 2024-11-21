import { supabase } from "@/supabase";

export const register = ({
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  console.log(email, password);
  return supabase.auth.signUp({
    email,
    password,
  });
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};
