import './App.css'
import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import LightThemeHome from './components/themes/LightThemeHome'
import DarkThemeHome from './components/themes/DarkThemeHome'
import ColorfulThemeHome from './components/themes/ColorfulThemeHome'

function App() {
  const { theme } = useTheme();
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <motion.div
      key={theme}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {theme === 'light' && <LightThemeHome />}
      {theme === 'dark' && <DarkThemeHome />}
      {theme === 'colorful' && <ColorfulThemeHome />}
    </motion.div>
  );
}

export default App
