import './App.css'
import ThemeProvider from './contexts/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <div>
        <h1 className="text-3xl font-bold underline text-center mt-10">
          Multi Theme Switcher
        </h1>
        <p className="text-center mt-5">
          This is a simple example of a multi-theme switcher using React and Tailwind CSS.
        </p>
      </div>
    </ThemeProvider>
  )
}

export default App
