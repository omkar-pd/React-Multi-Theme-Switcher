import { motion } from "framer-motion";
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
                return 'bg-gray-950 border-2 border-yellow-300 rounded-xl shadow-2xl p-4 font-serif font-extrabold text-yellow-200 h-[400px]';
            case 'colorful':
                return 'rounded-2xl p-4 shadow-xl font-pacifico text-center border-4 border-pink-400 bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200 text-black h-[400px]';
            default:
                return 'bg-white rounded-lg border border-gray-200 shadow-sm p-4 h-[400px]';
        }
    };

    const getImageStyles = () => {
        switch (theme) {
            case 'dark':
                return 'mb-3 w-24 h-24 object-contain rounded bg-gray-900 flex-shrink-0 mx-auto';
            case 'colorful':
                return 'mb-3 w-24 h-24 object-contain rounded bg-white/60 mx-auto flex-shrink-0';
            default:
                return 'mb-3 w-24 h-24 object-contain rounded flex-shrink-0 mx-auto';
        }
    };

    const getTitleStyles = () => {
        switch (theme) {
            case 'dark':
                return 'text-sm font-bold mb-2 text-yellow-100 text-center h-10 overflow-hidden leading-tight';
            case 'colorful':
                return 'text-base font-bold mb-2 text-center h-10 overflow-hidden leading-tight';
            default:
                return 'text-sm font-semibold mb-2 text-center text-gray-900 h-10 overflow-hidden leading-tight';
        }
    };

    const getDescriptionStyles = () => {
        switch (theme) {
            case 'dark':
                return 'text-yellow-300 mb-3 text-center text-xs h-16 overflow-hidden leading-relaxed';
            case 'colorful':
                return 'mb-3 text-sm text-center h-16 overflow-hidden leading-relaxed';
            default:
                return 'text-gray-600 mb-3 text-center text-xs h-16 overflow-hidden leading-relaxed';
        }
    };

    const getPriceStyles = () => {
        switch (theme) {
            case 'dark':
                return 'mt-auto text-yellow-400 font-bold text-lg text-center';
            case 'colorful':
                return 'mt-auto text-green-700 font-bold text-xl text-center';
            default:
                return 'mt-auto text-blue-600 font-bold text-lg text-center';
        }
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength).trim() + '...';
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        },
        hover: {
            y: -10,
            scale: 1.05,
            boxShadow: theme === 'dark'
                ? "0 20px 40px rgba(250, 204, 21, 0.3)"
                : theme === 'colorful'
                    ? "0 20px 40px rgba(244, 114, 182, 0.4)"
                    : "0 20px 40px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    };

    return (
        <motion.div
            className={`flex flex-col items-center w-full max-w-xs mx-auto cursor-pointer ${getCardStyles()}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
        >
            {product.image && (
                <motion.div className="overflow-hidden rounded mb-2">
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className={getImageStyles()}
                        variants={imageVariants}
                        whileHover="hover"
                    />
                </motion.div>
            )}

            <div className="flex flex-col justify-between h-full w-full">
                <div className="flex-grow">
                    <motion.h2
                        className={getTitleStyles()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        title={product.title}
                    >
                        {truncateText(product.title, 50)}
                    </motion.h2>

                    {product.description && (
                        <motion.p
                            className={getDescriptionStyles()}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            title={product.description}
                        >
                            {truncateText(product.description, 80)}
                        </motion.p>
                    )}
                </div>

                {product.price !== undefined && (
                    <motion.span
                        className={getPriceStyles()}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        ${product.price.toFixed(2)}
                    </motion.span>
                )}
            </div>
        </motion.div>
    );
}

export default ProductCard;
