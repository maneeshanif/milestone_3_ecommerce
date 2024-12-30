import {atom} from "jotai";

 export interface Product {
    name: string;
    ImageUrl: string;
    regularPrice: number;
    discountedPrice: number;
    _id: string;
  
    category: string;
 
    stock: number;
}

export  const productAtom = atom<Product[]>([]);