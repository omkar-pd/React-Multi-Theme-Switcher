import { useTheme } from "../../hooks/useTheme";

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
    const { theme } = useTheme();

    const getCardStyles = () => {
        switch (theme) {
            case 'dark':
                return 'bg-gray-950 border-2 border-yellow-300 rounded-xl shadow-2xl p-6 font-serif font-extrabold text-yellow-200 hover:shadow-yellow-400';
            case 'colorful':
                return 'rounded-2xl p-6 shadow-xl font-pacifico text-center border-4 border-pink-400 bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200 text-black hover:shadow-pink-400';
            default:
                return 'bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md';
        }
    };

    const getImageStyles = () => {
        switch (theme) {
            case 'dark':
                return 'mb-3 w-28 h-28 object-contain rounded bg-gray-900 flex-shrink-0';
            case 'colorful':
                return 'mb-3 w-28 h-28 object-contain rounded bg-white/60 mx-auto flex-shrink-0';
            default:
                return 'mb-3 w-28 h-28 object-contain rounded flex-shrink-0';
        }
    };

    const getTitleStyles = () => {
        switch (theme) {
            case 'dark':
                return 'text-lg mb-2 text-yellow-100 text-center line-clamp-2 flex-grow';
            case 'colorful':
                return 'text-xl mb-2 line-clamp-2 flex-grow';
            default:
                return 'text-base font-semibold mb-2 text-center text-gray-900 line-clamp-2 flex-grow';
        }
    };

    const getDescriptionStyles = () => {
        switch (theme) {
            case 'dark':
                return 'text-yellow-300 mb-2 text-center text-xs line-clamp-2 max-h-10 overflow-hidden';
            case 'colorful':
                return 'mb-2 text-base line-clamp-2 max-h-12 overflow-hidden';
            default:
                return 'text-gray-600 mb-2 text-center text-xs line-clamp-2 max-h-10 overflow-hidden';
        }
    };

    const getPriceStyles = () => {
        switch (theme) {
            case 'dark':
                return 'mt-auto text-yellow-400 font-bold text-base';
            case 'colorful':
                return 'mt-auto text-green-700 font-bold text-lg';
            default:
                return 'mt-auto text-blue-600 font-bold text-sm';
        }
    };

    return (
        <div className={`flex flex-col items-center w-full max-w-xs h-auto min-h-[320px] mx-auto transition-transform hover:scale-105 duration-200 ${getCardStyles()}`}>
            {product.image && (
                <img
                    src={product.image}
                    alt={product.title}
                    className={getImageStyles()}
                />
            )}
            <h2 className={getTitleStyles()}>{product.title}</h2>
            {product.description && (
                <p className={getDescriptionStyles()}>
                    {product.description}
                </p>
            )}
            {product.price !== undefined && (
                <span className={getPriceStyles()}>${product.price}</span>
            )}
        </div>
    );
}

export default ProductCard;
