import { upsertProfileInfo } from "@/supabase/account";
import { logout } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";


export const useUpdateProfileInfo = () => {

    return useMutation({
        mutationKey: ["upsertProfileInfo"],
        mutationFn: upsertProfileInfo,
      });
}



export const useLogout = () => {
    return useMutation({
      mutationKey: ["logout"],
      mutationFn: logout,
    });
}
