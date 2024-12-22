import { signUp } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";


export const useSignUp = () =>{
    return useMutation({
        mutationKey: ["signUp"],
        mutationFn: signUp,
      });

}


