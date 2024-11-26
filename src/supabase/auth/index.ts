import { supabase } from "../index";

export const signUp = ({
  email,
  password,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  return supabase.auth
    .signUp({
      email,
      password,
    })
    .then((res) => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      return res;
    });
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth
    .signInWithPassword({
      email,
      password,
    })
    .then((res) => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      return res;
    });
};

export const logout = () => {
  return supabase.auth.signOut();
};
