import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { LOG_IN_MUTATION_KEY } from "./enum";

export const useLogIn = () => {
  return useMutation({
    mutationKey: [LOG_IN_MUTATION_KEY.LOGIN],
    mutationFn: login,
  });
};
