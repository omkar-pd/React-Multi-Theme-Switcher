import { motion } from "framer-motion";
import ProductGrid from "../ui/ProductGrid";


function LightThemeHome() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="light-theme-main-container min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 pt-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.header className="w-full mb-16" variants={itemVariants}>
                <motion.h1
                    className="text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                >
                    Multi Theme Switcher
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-500 text-center font-light max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Experience clarity and focus with a clean, distraction-free interface. This is the minimalist light theme with simple sans-serif fonts.
                </motion.p>
            </motion.header>
            <motion.main className="w-full flex flex-col items-center" variants={containerVariants}>
                <motion.section className="mb-16 w-full flex justify-center" variants={itemVariants}>
                    <motion.button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-lg shadow-md transition-colors text-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Action Button
                    </motion.button>
                </motion.section>
                <motion.section className="w-full pb-12" variants={itemVariants}>
                    <ProductGrid />
                </motion.section>
            </motion.main>
        </motion.div>
    );
}

export default LightThemeHome;
