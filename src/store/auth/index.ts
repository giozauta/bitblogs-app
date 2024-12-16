import { atom } from "jotai";

interface User {
  user: {
    id: string;
  };
}

export const userAtom = atom<User | null>(null);

export const userIconAtom = atom<string | null>(null);

export const langAtom = atom("en");