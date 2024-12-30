import { atom} from "jotai"; // Jotai for state management

import { CardProps } from "../components/Home/products/Card/Card"; // Importing the CardProps interface
const favoriteProductsAtom = atom<CardProps[]>([]);

export { favoriteProductsAtom };

