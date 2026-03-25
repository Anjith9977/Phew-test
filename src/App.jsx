import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import AddPage from './pages/AddPage'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPage />} />
    </Routes>
    </>
  )
}

export default App
