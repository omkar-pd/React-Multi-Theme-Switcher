interface Product {
    id: number | string;
    title: string;
    description?: string;
    price?: number;
    image?: string;
}

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="minimal-card bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col items-center max-w-xs mx-auto transition-transform hover:scale-105 hover:shadow-md duration-200">
            {product.image && (
                <img
                    src={product.image}
                    alt={product.title}
                    className="mb-3 w-28 h-28 object-contain rounded"
                />
            )}
            <h2 className="text-base font-semibold mb-1 text-center text-gray-900">{product.title}</h2>
            {product.description && (
                <p className="text-gray-600 mb-2 text-center text-xs line-clamp-2 max-h-10 overflow-hidden">
                    {product.description}
                </p>
            )}
            {product.price !== undefined && (
                <span className="mt-1 text-blue-600 font-bold text-sm">${product.price}</span>
            )}
        </div>
    );
}

export default ProductCard;
