import { atom } from "jotai";

// Define a type for the user object
interface User {
  user: {
    id: string;
  };
  // Add other properties as needed, e.g., name, email, etc.
}

// Define the type for the atom state: it can be either the user object or null
export const userAtom = atom<User>();
