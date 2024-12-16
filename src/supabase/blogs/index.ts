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
    const { data, error } = await supabase.from("blogs")
    .select("*");
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
  search: string,
): Promise<blog[] | []> => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .like("title_en", search);
    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteBlogs = async (id: number) => {
  try {
    const response = await supabase.from("blogs").delete().eq("id", id);
    return response;
  } catch (error) {
    return error;
  }
};