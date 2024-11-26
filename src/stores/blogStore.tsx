import { create } from "zustand";

interface BlogValues {
  id: string;
  title: string;
  description: string;
  blogImageURL1: string;
  timestamp: string;
}

interface BlogStore {
  blogs: BlogValues[];
  setBlogs: (blogs: BlogValues[]) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
}));
