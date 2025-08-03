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
                return 'bg-gray-950 border-2 border-yellow-300 rounded-xl shadow-2xl p-6 font-serif font-extrabold text-yellow-200';
            case 'colorful':
                return 'rounded-2xl p-6 shadow-xl font-pacifico text-center border-4 border-pink-400 bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200 text-black';
            default:
                return 'bg-white rounded-lg border border-gray-200 shadow-sm p-4';
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
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
                ease: "easeInOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className={`flex flex-col items-center w-full max-w-xs h-auto min-h-[320px] mx-auto cursor-pointer ${getCardStyles()}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
        >
            {product.image && (
                <motion.div className="overflow-hidden rounded">
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className={getImageStyles()}
                        variants={imageVariants}
                        whileHover="hover"
                    />
                </motion.div>
            )}
            <motion.h2
                className={getTitleStyles()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {product.title}
            </motion.h2>
            {product.description && (
                <motion.p
                    className={getDescriptionStyles()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {product.description}
                </motion.p>
            )}
            {product.price !== undefined && (
                <motion.span
                    className={getPriceStyles()}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ${product.price}
                </motion.span>
            )}
        </motion.div>
    );
}

export default ProductCard;
