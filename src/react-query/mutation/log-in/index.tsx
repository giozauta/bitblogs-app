import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";


export const useLogIn = () => {
    return  useMutation({
        mutationKey: ["login"],
        mutationFn: login,

      });
}