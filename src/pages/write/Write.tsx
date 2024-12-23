import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";
import {} from "@/supabase/blogs";
import Blog from "./components/blogs-list";
import BlogsForm from "./components/form-section";
import { BlogsFilterFormValues, FormData } from "./types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useDebounce } from "use-debounce";
import { useDeleteBlog, useUpdateBlog } from "@/react-query/mutation/write";
import { useBlogsList } from "@/react-query/query/write";

const Write: React.FC = () => {
  const [user] = useAtom(userAtom);
  const userId = user?.user.id;
  //

  const [searchParams, setSearchParams] = useSearchParams();
  //
  const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: qs.parse(searchParams.toString()) as BlogsFilterFormValues,
  });
  const searchText = watch("searchText");
  //
  const [debouncedSearchText] = useDebounce(searchText, 1000);
  //
  const {
    data: blogsData,
    refetch,
    isLoading,
    isError,
  } = useBlogsList(debouncedSearchText);
  //
  const { mutate: updateBlogData } = useUpdateBlog();
  //
  const { mutate: deleteBlog } = useDeleteBlog();
  //
  const onSubmit = (formValues: FormData) => {
    if (!formValues.image_file) {
      return;
    }

    const fileName = `${formValues.user_id}-${Date.now()}-${formValues.image_file.name}`;

    updateBlogData(
      {
        fileName: fileName,
        file: formValues.image_file,
        newBlogValues: {
          title_ka: formValues.title_ka,
          title_en: formValues.title_en,
          description_ka: formValues.description_ka,
          description_en: formValues.description_en,
          user_id: userId,
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };
  //
  const onDelete = (id: number) => {
    deleteBlog(id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  //
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const newSearchText = e.target.value;

    //იმისთვის რომ url ში ჩავწეროთ path
    setSearchParams({ searchText: newSearchText });
    //
    onChange(newSearchText);
  };
  //
  return (
    <>
      <BlogsForm onSubmit={onSubmit} />
      <div className=" flex flex-row items-center justify-center gap-4 mt-12 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
        <Controller
          control={control}
          name="searchText"
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={(e) => handleSearchChange(e, onChange)}
              value={value}
              placeholder="Enter Search Text..."
              className=""
            />
          )}
        />
      </div>
      {blogsData?.map((blog) => (
        <Blog key={blog.id} blog={blog} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Write;
