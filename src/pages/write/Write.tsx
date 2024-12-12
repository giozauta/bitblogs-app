import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string;
  image_url: FileList | null;
};

const Write: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      title_ka: '',
      title_en: '',
      description_ka: '',
      description_en: '',
      user_id: '',
      image_url: null,
    },
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log('Form data submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
      
      {/* Title (KA) */}
      <div>
        <Label htmlFor="title_ka" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Title (KA)</Label>
        <Controller
          name="title_ka"
          control={control}
          rules={{ required: 'Title in Georgian is required' }}
          render={({ field }) => (
            <Input
              id="title_ka"
              {...field}
              placeholder="Enter title in Georgian"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
        {errors.title_ka && <p className="text-red-500 text-sm">{errors.title_ka.message}</p>}
      </div>

      {/* Title (EN) */}
      <div>
        <Label htmlFor="title_en" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Title (EN)</Label>
        <Controller
          name="title_en"
          control={control}
          rules={{ required: 'Title in English is required' }}
          render={({ field }) => (
            <Input
              id="title_en"
              {...field}
              placeholder="Enter title in English"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
        {errors.title_en && <p className="text-red-500 text-sm">{errors.title_en.message}</p>}
      </div>

      {/* Description (KA) */}
      <div>
        <Label htmlFor="description_ka" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Description (KA)</Label>
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
        <Label htmlFor="description_en" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Description (EN)</Label>
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

      {/* User ID */}
      <div>
        <Label htmlFor="user_id" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">User ID</Label>
        <Controller
          name="user_id"
          control={control}
          rules={{ required: 'User ID is required' }}
          render={({ field }) => (
            <Input
              id="user_id"
              {...field}
              placeholder="Enter your User ID"
              className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            />
          )}
        />
        {errors.user_id && <p className="text-red-500 text-sm">{errors.user_id.message}</p>}
      </div>

      {/* Image URL (File Input) */}
      <div>
        <Label htmlFor="image_url" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Image URL</Label>
        <Controller
          name="image_url"
          control={control}
          render={({ field:{onChange}}) => (
            <Input
              id="image_url"

              onChange={
                (e)=>{
                  const file = e.target.files?.[0]
                  onChange(file)
                }
              }
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
  );
};

export default Write;
