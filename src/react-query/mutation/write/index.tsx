import { deleteBlogs, uploadBlogWithImage } from "@/supabase/blogs";
import { useMutation } from "@tanstack/react-query";
import { WRITE_MUTATION_KEY } from "./enum";

export const useUpdateBlog = () => {
  return useMutation({
    mutationKey: [WRITE_MUTATION_KEY.UPLOAD_BLOG_WITH_IMAGE],
    mutationFn: uploadBlogWithImage,
  });
};

export const useDeleteBlog = () => {
  return useMutation({
    mutationKey: [WRITE_MUTATION_KEY.DELETE_BLOG],
    mutationFn: deleteBlogs,
  });
};
