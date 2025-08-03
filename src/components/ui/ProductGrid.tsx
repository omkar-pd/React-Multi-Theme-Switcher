import { useProducts } from "../../hooks/useProducts";
import { useTheme } from "../../hooks/useTheme";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductGrid() {
    const { products, loading, error } = useProducts();
    const { theme } = useTheme();

    const getErrorStyles = () => {
        switch (theme) {
            case 'light':
                return 'text-red-500';
            case 'colorful':
                return 'text-red-200 font-pacifico';
            default:
                return 'text-red-400';
        }
    };

    const getEmptyStyles = () => {
        switch (theme) {
            case 'light':
                return 'text-gray-400';
            case 'colorful':
                return 'text-white font-pacifico';
            default:
                return 'text-yellow-300';
        }
    };

    if (loading) {
        return (
            <div className="w-full flex justify-center px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl justify-items-center">
                    {Array.from({ length: 10 }, (_, index) => (
                        <ProductCardSkeleton key={`skeleton-${index}`} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className={`text-center ${getErrorStyles()}`}>Error loading products.</div>;
    }

    if (!products || products.length === 0) {
        return <div className={`text-center ${getEmptyStyles()}`}>No products found.</div>;
    }

    return (
        <div className="w-full flex justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl justify-items-center">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;
