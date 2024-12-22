import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";


  

export const  useHeader=(userId:string)=>{

    return useQuery({
        queryKey: ["userIcon"],
        queryFn: () => getProfileInfo(userId ?? ""),
        enabled: !!userId,
      });
}

