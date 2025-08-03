import { motion } from "framer-motion";
import { useProducts } from "../../hooks/useProducts";
import { useTheme } from "../../hooks/useTheme";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductGrid() {
    const { products, loading, error } = useProducts();
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

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
            <motion.div 
                className="w-full flex justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <motion.div
                            key={`skeleton-${index}`}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <ProductCardSkeleton />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div 
                className={`text-center ${getErrorStyles()}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                Error loading products.
            </motion.div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <motion.div 
                className={`text-center ${getEmptyStyles()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                No products found.
            </motion.div>
        );
    }

    return (
        <motion.div 
            className="w-full flex justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl justify-items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    delay: index * 0.05
                                }
                            }
                        }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default ProductGrid;
