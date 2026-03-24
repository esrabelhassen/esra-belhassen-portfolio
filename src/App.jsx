import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App