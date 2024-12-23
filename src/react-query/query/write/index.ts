import { getBlogsBySearch } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";
import { WRITE_QUERY_KEY } from "./enum";

export const useBlogsList = (debouncedSearchText: string | number | null) => {
  return useQuery({
    queryKey: [WRITE_QUERY_KEY.BLOGS, debouncedSearchText],
    queryFn: () => getBlogsBySearch(debouncedSearchText),
  });
};
