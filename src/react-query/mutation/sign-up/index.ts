import { signUp } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { SIGN_UP_MUTATION_KEY } from "./enum";

export const useSignUp = () => {
  return useMutation({
    mutationKey: [SIGN_UP_MUTATION_KEY.SIGN_UP],
    mutationFn: signUp,
  });
};
