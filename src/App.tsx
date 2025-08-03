import './App.css'
import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import LightThemeHome from './components/themes/LightThemeHome'
import DarkThemeHome from './components/themes/DarkThemeHome'
import ColorfulThemeHome from './components/themes/ColorfulThemeHome'

function App() {
  const { theme } = useTheme();
  
  // Animation variants for page transitions.
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: [0.6, -0.05, 0.01, 0.99] as const,
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
      className="overflow-hidden"
    >
      {/* Conditionally render theme-specific home components */}
      {theme === 'light' && <LightThemeHome />}
      {theme === 'dark' && <DarkThemeHome />}
      {theme === 'colorful' && <ColorfulThemeHome />}
    </motion.div>
  );
}

export default App
