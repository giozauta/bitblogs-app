import { blog } from "@/pages/write/types";
import { supabase } from "../index";
import { blogType } from "./types";

export const uploadBlogWithImage = async ({
  fileName,
  file,
  newBlogValues,
}: {
  fileName: string;
  file: File;
  newBlogValues: blogType;
}) => {
  console.log(file);
  try {
    const imageResult = await supabase.storage
      .from("blog_images")
      .upload(fileName, file);

    if (imageResult.error) {
      throw new Error(imageResult.error.message);
    }

    const imagePath = imageResult.data?.path;

    if (!imagePath) {
      throw new Error("Image upload failed: Path is undefined.");
    }

    const blogData = {
      ...newBlogValues,
      image_url: imagePath,
    };
    const blogResult = await supabase.from("blogs").insert(blogData);

    if (blogResult.error) {
      throw new Error(blogResult.error.message);
    }

    return blogResult.data;
  } catch (error) {
    console.error("Error uploading blog with image:", error);
    return error;
  }
};

export const getBlogs = async (): Promise<blog[]> => {
  try {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error(`Failed to fetch blogs: ${error}`);
  }
};
export const getBlogsBySearch = async (
  search: string|number|null,
): Promise<blog[] | []> => {
  try {
    const query = supabase
      .from("blogs")
      .select("*"); 
    if (search) {
      query.like("title_en", `%${search}%`);
    }
    const { data, error } = await query;
    if (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    return data ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteBlogs = async (id: number) => {
  try {
    const { data: blog, error: fetchError } = await supabase
      .from("blogs")
      .select("image_url")
      .eq("id", id)
      .single();

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    if (blog?.image_url) {
      const { error: deleteImageError } = await supabase.storage
        .from("blog_images")
        .remove([blog.image_url]);

      if (deleteImageError) {
        throw new Error(deleteImageError.message);
      }
    }

    const { data, error: deleteError } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (deleteError) {
      throw new Error(deleteError.message);
    }

    return data;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error(
      `Failed to delete blog: ${error instanceof Error ? error.message : error}`,
    );
  }
};
