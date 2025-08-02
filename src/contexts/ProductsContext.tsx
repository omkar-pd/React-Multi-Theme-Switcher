import { createContext } from "react";
import type { Product } from "./ProductsProvider";


type ProductsContextType = {
    products: Product[];
    loading: boolean;
    error: string | null;
};

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: false,
    error: null,
});

export default ProductsContext;

