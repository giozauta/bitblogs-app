/* eslint-disable */
// @ts-nocheck
import { useForm, Controller, set } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect,useState } from "react";
import { supabase } from "@/supabase";

type FormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string | null;
  image_file: File | null;
};

const Write: React.FC = () => {
  const [state,setState] = useState([])
  console.log(state)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title_ka: "",
      title_en: "",
      description_ka: "",
      description_en: "",
      image_file: null,
    },
  });


  useEffect(() => {
    supabase
    .from("blogs")
    .select("*")
    .throwOnError()
    .then((res) => {
      setState(res?.data);
    });
  },[])


  const onSubmit = async (formValues: FormData) => {
    if (formValues?.image_file) {
      try {
        const fileName = `${formValues.user_id}-${Date.now()}-${formValues.image_file.name}`;

        const { data, error } = await supabase.storage
          .from("blog_images")
          .upload(fileName, formValues.image_file);

        if (error) {
          console.error("Error uploading file:", error.message);
        } else {
          await supabase.from("blogs").insert({
            title_ka: formValues.title_ka,
            title_en: formValues.title_en,
            description_ka: formValues.description_ka,
            description_en: formValues.description_en,
            user_id: "ac24d99b-5b03-4f28-8287-62eeb8cf0a2d",
            image_url: data?.fullPath,
          } as any);
          console.log("File uploaded successfully:", data);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }

    console.log("Form data submitted:", formValues);
  };

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      {/* Title (KA) */}
      <div>
        <Label
          htmlFor="title_ka"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Title (KA)
        </Label>
        <Controller
          name="title_ka"
          control={control}
          rules={{ required: "Title in Georgian is required" }}
          render={({ field }) => (
            <Input
              id="title_ka"
              {...field}
              placeholder="Enter title in Georgian"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
        {errors.title_ka && (
          <p className="text-red-500 text-sm">{errors.title_ka.message}</p>
        )}
      </div>

      {/* Title (EN) */}
      <div>
        <Label
          htmlFor="title_en"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Title (EN)
        </Label>
        <Controller
          name="title_en"
          control={control}
          rules={{ required: "Title in English is required" }}
          render={({ field }) => (
            <Input
              id="title_en"
              {...field}
              placeholder="Enter title in English"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
        {errors.title_en && (
          <p className="text-red-500 text-sm">{errors.title_en.message}</p>
        )}
      </div>

      {/* Description (KA) */}
      <div>
        <Label
          htmlFor="description_ka"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Description (KA)
        </Label>
        <Controller
          name="description_ka"
          control={control}
          render={({ field }) => (
            <Textarea
              id="description_ka"
              {...field}
              placeholder="Enter description in Georgian"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
      </div>

      {/* Description (EN) */}
      <div>
        <Label
          htmlFor="description_en"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Description (EN)
        </Label>
        <Controller
          name="description_en"
          control={control}
          render={({ field }) => (
            <Textarea
              id="description_en"
              {...field}
              placeholder="Enter description in English"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
      </div>

      {/* Image URL (File Input) */}
      <div>
        <Label
          htmlFor="image_file"
          className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Image URL
        </Label>
        <Controller
          name="image_file"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              id="image_file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
              type="file"
              placeholder="Upload an image"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-indigo-500 dark:bg-blue-800 dark:hover:bg-blue-700"
      >
        Submit
      </Button>
    </form>

    <div       
    className="space-y-6 mt-12 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      {state.map((post) => {
          const postImageUrl = post?.image_url?`${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${post?.image_url}`:"";

   return(
        <div key={post.id}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {post.title_ka}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{post.description_ka}</p>
          <img
            src={postImageUrl}
            alt={post.title_ka}
            className="mt-4 rounded-md w-40 h-40"
          />
        </div>
   )
      }
    )
    }
   

    </div>
    </>
  );
};

export default Write;
