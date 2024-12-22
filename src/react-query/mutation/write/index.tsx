import { deleteBlogs, uploadBlogWithImage } from "@/supabase/blogs";
import { useMutation } from "@tanstack/react-query";


export const useUpdateBlog = () =>{
    return useMutation({
    mutationKey: ["uploadBlogWithImage"],
    mutationFn: uploadBlogWithImage,

  });
}


export const useDeleteBlog = () => {
    return useMutation({
        mutationKey: ["deleteBlog"],
        mutationFn: deleteBlogs,
 
      });
}

