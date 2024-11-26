import { supabase } from "@/supabase";
import { FileProfileInfoPayLoad } from "./index.types";

export const upsertProfileInfo = async (value: FileProfileInfoPayLoad) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .upsert(value)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error in upsertProfileInfo:", error);
    throw new Error(`Failed to upsert profile info: ${error}`);
  }
};

export const getProfileInfo = async (
  id: string,
): Promise<FileProfileInfoPayLoad | null> => {
  if(id === "") return null
  try {
    const response = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (response.error) {
      throw new Error(response.error.message);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch profile info: ${error}`);
  }
};
