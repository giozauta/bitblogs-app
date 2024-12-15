import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";

import { deleteBlogs, getBlogs, getBlogsBySearch, uploadBlogWithImage } from "@/supabase/blogs";
import { useMutation, useQuery } from "@tanstack/react-query";
import Blog from "./components/blogs-list";
import BlogsForm from "./components/form-section";
import { BlogsFilterFormValues, FormData } from "./types";


import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const blogsFilterFormDefaultValues = {
  searchText: "",
};

const Write: React.FC = () => {
  const [user] = useAtom(userAtom);
  const userId = user?.user.id;


  const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: blogsFilterFormDefaultValues,
  });
  const searchText=watch("searchText")

  const { data: blogsData, refetch, isLoading, isError } = useQuery({
    queryKey: ["blogs", searchText], 
    queryFn: () =>
      searchText
        ? getBlogsBySearch(`%${searchText}%`) 
        : getBlogs(),
    enabled: true, 
  });
  console.log(blogsData)

  const { mutate: updateBlogData } = useMutation({
    mutationKey: ["uploadBlogWithImage"],
    mutationFn: uploadBlogWithImage,
    onSuccess: () => {
      refetch();
    },
  });

  const { mutate: deleteBlog } = useMutation({
    mutationKey: ["deleteBlog"],
    mutationFn: deleteBlogs,
    onSuccess: () => {
      refetch();
    },
  });



  const onSubmit = (formValues: FormData) => {
    if (!formValues.image_file) {
      return;
    }
    const fileName = `${formValues.user_id}-${Date.now()}-${formValues.image_file.name}`;

    updateBlogData({
      fileName: fileName,
      file: formValues.image_file,
      newBlogValues: {
        title_ka: formValues.title_ka,
        title_en: formValues.title_en,
        description_ka: formValues.description_ka,
        description_en: formValues.description_en,
        user_id: userId,
      },
    });
  };

  const onDelete = (id: number) => {
    deleteBlog(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }





  return (
    <>
      <BlogsForm onSubmit={onSubmit} />
      <div className=" flex flex-row items-center justify-center gap-4 mt-12 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
        <Controller
          control={control}
          name="searchText"
          render={({ field }) => (
            <Input {...field} placeholder="Enter Search Text..." className="" />
          )}
        />
      </div>
      {
        blogsData?.map((blog) => (
          <Blog key={blog.id} blog={blog} onDelete={onDelete} />
        ))
      }


    </>
  );
};

export default Write;
