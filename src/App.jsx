import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import CompanyPage from './pages/CompanyPage/CompanyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
