import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";
import { PROFILE_QUERY_KEY } from "./enum";

export const useProfileInfo = (userId: string) => {
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY.INFO],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
  });
};
