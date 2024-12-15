export type blog = {
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

export type FormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string | null;
  image_file: File | null;
};

export type BlogsFormProps = {
  onSubmit: (formValues: FormData) => void;
};

export type onDelete = (id: number) => void;

export type BlogsFilterFormValues = {
  searchText: string;
};
