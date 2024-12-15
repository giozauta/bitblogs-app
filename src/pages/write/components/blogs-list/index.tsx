import React from "react";
import { blog, onDelete } from "../../types/index";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); // relativeTime პლაგინის ჩართვა

const Blog: React.FC<{ blog: blog; onDelete: onDelete }> = ({
  blog,
  onDelete,
}) => {
  const postImageUrl = blog?.image_url
    ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
    : "";

  // თარიღის ფორმატირება
  const now = dayjs();// ახლანდელი დრო
  const createdAt = dayjs(blog.created_at);//დრო როდესაც ბლოგი შეიქმნა 
  const timeDifference = now.diff(createdAt, "day"); // დღეების სხვაობა now_ს და createdAt_ს შორის
  

  const formattedDate =
    timeDifference < 1
      ? createdAt.fromNow() 
      : `${createdAt.format("HH:mm")} - ${createdAt.format("DD/MM/YYYY")}`;

  return (
    <div className="space-y-6 mt-12 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
      <div>
         {formattedDate}
      </div>
      <div key={blog.id}>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          სათაური: {blog.title_ka}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          აღწერა: {blog.description_ka}
        </p>
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={blog.title_ka ?? "ბლოგის სურათი"}
            className="mt-4 rounded-md w-full h-60 object-cover"
          />
        )}
      </div>
      <Button variant={"destructive"} onClick={() => onDelete(blog.id)}>
        ბლოგის წაშლა
      </Button>
    </div>
  );
};

export default Blog;
