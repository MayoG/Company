import { Routes, Route } from 'react-router-dom'
import AppBar from './app-bar/AppBar'
import { useTheme } from './contexts/theme/ThemeContext'
import Home from './pages/home/Home'
import FAQ from './pages/faq/FAQ'
import People from './pages/people/People'
import Map from './pages/map/Map'

function App() {
  const { theme } = useTheme()
  return (
    <div style={{ ...(theme as React.CSSProperties) }}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/people" element={<People />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  )
}

export default App
