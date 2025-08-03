interface Product {
    id: number | string;
    title: string;
    description?: string;
    price?: number;
    image?: string;
}

interface DarkProductCardProps {
    product: Product;
}

function DarkProductCard({ product }: DarkProductCardProps) {
    return (
        <div className="bg-gray-950 border-2 border-yellow-300 rounded-xl shadow-2xl p-6 flex flex-col items-center font-serif font-extrabold text-yellow-200 max-w-xs mx-auto transition-transform hover:scale-105 hover:shadow-yellow-400 duration-200">
            {product.image && (
                <img
                    src={product.image}
                    alt={product.title}
                    className="mb-3 w-28 h-28 object-contain rounded bg-gray-900"
                />
            )}
            <h2 className="text-lg mb-1 text-yellow-100 text-center">{product.title}</h2>
            {product.description && (
                <p className="text-yellow-300 mb-2 text-center text-xs line-clamp-2 max-h-10 overflow-hidden">
                    {product.description}
                </p>
            )}
            {product.price !== undefined && (
                <span className="mt-1 text-yellow-400 font-bold text-base">${product.price}</span>
            )}
        </div>
    );
}

export default DarkProductCard;
