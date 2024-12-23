import { upsertProfileInfo } from "@/supabase/account";
import { logout } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEY } from "./enum";

export const useUpdateProfileInfo = () => {
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEY.UPDATE_PROFILE_INFO],
    mutationFn: upsertProfileInfo,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEY.LOGOUT],
    mutationFn: logout,
  });
};
