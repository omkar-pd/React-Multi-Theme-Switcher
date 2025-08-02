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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>,
)
