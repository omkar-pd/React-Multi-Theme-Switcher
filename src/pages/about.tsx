import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

function About() {
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const pageVariants = {
        initial: { opacity: 0, y: 10 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -10 }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.3
    };

    return (
        <motion.div
            key={theme}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <motion.div
                className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-8 max-w-2xl w-full"
                variants={itemVariants}
                whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                }}
            >
                <motion.h1
                    className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-yellow-300"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                >
                    About Us
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center"
                    variants={itemVariants}
                >
                    Welcome to the Multi Theme Switcher application! This project demonstrates how to implement dynamic theme switching in a modern React app using Tailwind CSS.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex-1 bg-blue-100 dark:bg-gray-700 rounded-lg p-4 text-center"
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.h2
                            className="font-semibold text-blue-700 dark:text-yellow-200 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Features
                        </motion.h2>
                        <motion.ul
                            className="text-sm text-gray-800 dark:text-gray-100 space-y-1"
                            variants={containerVariants}
                        >
                            {['🌗 Light, Dark, and Colorful themes', '⚡ Instant theme switching', '💾 Theme persistence', '📱 Fully responsive UI'].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-yellow-100 dark:bg-gray-600 rounded-lg p-4 text-center"
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.h2
                            className="font-semibold text-yellow-700 dark:text-blue-200 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            About the Author
                        </motion.h2>
                        <motion.p
                            className="text-sm text-gray-800 dark:text-gray-100"
                            variants={itemVariants}
                        >
                            Created by <motion.span
                                className="font-bold"
                                whileHover={{
                                    color: "#3B82F6",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                Omkar
                            </motion.span>.<br />
                            Explore the code and try switching themes using the selector above!
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
export default About;
