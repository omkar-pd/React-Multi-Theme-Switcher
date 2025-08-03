interface Product {
    id: number | string;
    title: string;
    description?: string;
    price?: number;
    image?: string;
}

interface ColorfulProductCardProps {
    product: Product;
}

function ColorfulProductCard({ product }: ColorfulProductCardProps) {
    return (
        <div className="rounded-2xl p-6 shadow-xl font-pacifico text-center border-4 border-pink-400 bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200 text-black max-w-xs mx-auto transition-transform hover:scale-105 hover:shadow-pink-400 duration-200">
            {product.image && (
                <img
                    src={product.image}
                    alt={product.title}
                    className="mb-3 w-28 h-28 object-contain rounded bg-white/60"
                />
            )}
            <h2 className="text-xl mb-1">{product.title}</h2>
            {product.description && (
                <p className="mb-2 text-base line-clamp-2 max-h-12 overflow-hidden">
                    {product.description}
                </p>
            )}
            {product.price !== undefined && (
                <span className="mt-1 text-green-700 font-bold text-lg">${product.price}</span>
            )}
        </div>
    );
}

export default ColorfulProductCard;
