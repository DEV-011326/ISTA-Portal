import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/ISTA-Portal/" element={<Home />} />
          <Route path="/ISTA-Portal/about" element={<About />} />
          <Route path="/ISTA-Portal/programs" element={<Programs />} />
          <Route path="/ISTA-Portal/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

