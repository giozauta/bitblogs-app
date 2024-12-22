import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";


export const useProfileInfo = (userId: string) => {
    return useQuery({
        queryKey: ["profile-info"],
        queryFn: () => getProfileInfo(userId),
        enabled: !!userId,
      });
}







