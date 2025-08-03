import { motion } from "framer-motion";
import ProductGrid from "../ui/ProductGrid";

function DarkThemeHome() {
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
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.main className="flex flex-col items-center justify-start p-6 md:p-12 pt-24 md:pt-16" variants={containerVariants}>
        <div className="w-full max-w-6xl">
          <motion.header className="w-full mb-16" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 tracking-tight text-center"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
                transition: { duration: 0.2 }
              }}
            >
              Multi Theme Switcher
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 md:mb-10 font-semibold text-center max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experience a bold, focused design with sidebar navigation. This is the dark theme with serif fonts and enhanced readability.
            </motion.p>
          </motion.header>

          <motion.section className="mb-16 w-full flex justify-center" variants={itemVariants}>
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold py-4 px-12 rounded-lg shadow-xl transition-colors text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(250, 204, 21, 0.6)",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Action Button
            </motion.button>
          </motion.section>

          <motion.section className="w-full pb-12" variants={itemVariants}>
            <ProductGrid />
          </motion.section>
        </div>
      </motion.main>
    </motion.div>
  );
}

export default DarkThemeHome;
