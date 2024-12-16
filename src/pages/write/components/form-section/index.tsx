import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormData, BlogsFormProps } from "../../types";
import { useTranslation } from "react-i18next";

const BlogsForm: React.FC<BlogsFormProps> = ({ onSubmit }) => {
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
  //
  const { t } = useTranslation();
  //
  return (
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
          {t("write.titleKa")}
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
          {t("write.titleEn")}
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
          {t("write.descriptionKa")}
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
          {t("write.descriptionEn")}
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
          {t("write.image")}
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
              className="mt-2  w-full border  border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
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
        {t("write.submit")}
      </Button>
    </form>
  );
};

export default BlogsForm;
