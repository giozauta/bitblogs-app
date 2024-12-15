import React from "react";
import { blog, onDelete} from "../../types/index";
import { Button } from "@/components/ui/button";




const Blog: React.FC<{ blog: blog; onDelete: onDelete }> = ({
  blog,
  onDelete,
}) => {




  const postImageUrl = blog?.image_url
    ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog?.image_url}`
    : "";


  return (


      <div className="space-y-6 mt-12 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
        <div key={blog.id}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Title: {blog.title_ka}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Description: {blog.description_ka}
          </p>
          <img
            src={postImageUrl}
            alt={blog.title_ka ?? "image"}
            className="mt-4 rounded-md w-full h-60"
          />
        </div>
        <Button variant={"destructive"} onClick={() => onDelete(blog.id)}>
          Delete Blog
        </Button>
      </div>

  );
};

export default Blog;
