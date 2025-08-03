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
        <div className="rounded-2xl p-6 shadow-xl font-pacifico text-center border-4 border-pink-400 bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200 text-black w-full max-w-xs h-auto min-h-[320px] mx-auto transition-transform hover:scale-105 hover:shadow-pink-400 duration-200 flex flex-col">
            {product.image && (
                <img
                    src={product.image}
                    alt={product.title}
                    className="mb-3 w-28 h-28 object-contain rounded bg-white/60 mx-auto flex-shrink-0"
                />
            )}
            <h2 className="text-xl mb-2 line-clamp-2 flex-grow">{product.title}</h2>
            {product.description && (
                <p className="mb-2 text-base line-clamp-2 max-h-12 overflow-hidden">
                    {product.description}
                </p>
            )}
            {product.price !== undefined && (
                <span className="mt-auto text-green-700 font-bold text-lg">${product.price}</span>
            )}
        </div>
    );
}

export default ColorfulProductCard;
