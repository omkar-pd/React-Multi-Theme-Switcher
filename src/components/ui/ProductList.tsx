import ProductCard from "./ProductCard";

interface Product {
    id: number | string;
    title: string;
    description?: string;
    price?: number;
    image?: string;
}

interface ProductListProps {
    products: Product[] | undefined;
    loading: boolean;
    error: any;
}

function ProductList({ products, loading, error }: ProductListProps) {
    if (loading) return <div className="text-center text-gray-500">Loading products...</div>;
    if (error) return <div className="text-center text-red-500">Error loading products.</div>;
    if (!products || products.length === 0) return <div className="text-center text-gray-400">No products found.</div>;

    return (
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
