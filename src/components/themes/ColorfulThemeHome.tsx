import { motion } from "framer-motion";
import ProductGrid from "../ui/ProductGrid";

function ColorfulThemeHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start px-6 py-12 pt-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="w-full mb-16" variants={itemVariants}>
        <motion.h1
          className="text-5xl md:text-6xl font-pacifico mb-6 text-white drop-shadow-2xl text-center"
          variants={floatingVariants}
          animate="animate"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
            transition: { duration: 0.2 },
          }}
        >
          Multi Theme Switcher
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-pacifico text-white text-center max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Enjoy a vibrant, playful experience with colorful gradients and fun
          typography. This theme uses the Pacifico Google Font for a unique look.
        </motion.p>
      </motion.header>

      <motion.main
        className="w-full flex flex-col items-center"
        variants={containerVariants}
      >
        <motion.section
          className="mb-16 w-full flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-white/95 hover:bg-white text-purple-600 font-pacifico font-bold py-4 px-12 rounded-3xl shadow-2xl transition-all duration-300 text-xl"
            whileHover={{
              scale: 1.15,
              rotate: 5,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.5)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(244, 114, 182, 0.3)",
                "0 10px 30px rgba(250, 204, 21, 0.3)",
                "0 10px 30px rgba(52, 211, 153, 0.3)",
                "0 10px 30px rgba(244, 114, 182, 0.3)",
              ],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Action Button
          </motion.button>
        </motion.section>

        <motion.section
          className="w-full pb-12"
          variants={itemVariants}
        >
          <ProductGrid />
        </motion.section>
      </motion.main>
    </motion.div>
  );
}

export default ColorfulThemeHome;
