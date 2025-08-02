import './App.css'
import { useTheme } from './hooks/useTheme'
import LightThemeHome from './components/themes/LightThemeHome'
import DarkThemeHome from './components/themes/DarkThemeHome'
import ColorfulThemeHome from './components/themes/ColorfulThemeHome'

function App() {
  const { theme } = useTheme();

  if (theme === 'light') return <LightThemeHome />;
  if (theme === 'dark') return <DarkThemeHome />;
  if (theme === 'colorful') return <ColorfulThemeHome />;
  return null;
}

export default App
