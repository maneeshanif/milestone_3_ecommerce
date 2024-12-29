import { atom } from "jotai";

export interface CategoryBanner {
  _id: string;
  product_name: string;
  ImageUrl: string;
}

export const categoryAtom = atom<CategoryBanner[]>([]);
