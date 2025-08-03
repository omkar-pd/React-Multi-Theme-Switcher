import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

function Contact() {
    const { theme } = useTheme();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
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
                    className="text-4xl font-bold mb-4 text-center text-green-600 dark:text-yellow-300"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center"
                    variants={itemVariants}
                >
                    Have questions or feedback? We&apos;d love to hear from you!
                </motion.p>
                <motion.form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                >
                    <motion.input
                        type="text"
                        placeholder="Your Name"
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        variants={itemVariants}
                        whileFocus="focus"
                        animate="blur"
                        required
                    />
                    <motion.input
                        type="email"
                        placeholder="Your Email"
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        variants={itemVariants}
                        whileFocus="focus"
                        animate="blur"
                        required
                    />
                    <motion.textarea
                        placeholder="Your Message"
                        rows={4}
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                        variants={itemVariants}
                        whileFocus="focus"
                        animate="blur"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors relative"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <motion.div
                                className="flex items-center justify-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <motion.div
                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                Sending...
                            </motion.div>
                        ) : (
                            "Send Message"
                        )}
                    </motion.button>
                </motion.form>
                <motion.div
                    className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
                    variants={itemVariants}
                >
                    Or email us at{" "}
                    <motion.a
                        href="mailto:info@example.com"
                        className="underline text-green-700 dark:text-yellow-300"
                        whileHover={{
                            scale: 1.05,
                            color: "#059669",
                            transition: { duration: 0.2 }
                        }}
                    >
                        info@example.com
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Contact;
