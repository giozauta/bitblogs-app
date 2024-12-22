import { getBlogsBySearch } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";



export const useBlogsList=(debouncedSearchText:string|number|null)=>{
    return  useQuery({
        queryKey: ["blogs", debouncedSearchText],
        queryFn: () => getBlogsBySearch(debouncedSearchText),    
      });
}



