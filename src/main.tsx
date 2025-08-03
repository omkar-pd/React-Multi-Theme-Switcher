import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/about.tsx'
import ThemeProvider from './contexts/ThemeProvider'
import Navbar from './components/Navbar'
import Contact from './pages/contact.tsx'
import { ProductsProvider } from './contexts/ProductsProvider.tsx'
import { useTheme } from './hooks/useTheme'
import Sidebar from './components/Sidebar'

function AppWithNavOrSidebar() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'dark' ? 'flex min-h-screen' : ''}>
      {theme === 'dark' ? <Sidebar /> : <Navbar />}
      <div className={theme === 'dark' ? 'flex-1' : ''}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ProductsProvider>
        <BrowserRouter>
          <AppWithNavOrSidebar />
        </BrowserRouter>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>,
)
