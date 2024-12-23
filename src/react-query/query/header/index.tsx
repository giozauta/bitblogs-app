import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";
import { HEADER_QUERY_KEY } from "./enum";

export const useHeader = (userId: string) => {
  return useQuery({
    queryKey: [HEADER_QUERY_KEY.USER_ICON],
    queryFn: () => getProfileInfo(userId ?? ""),
    enabled: !!userId,
  });
};
