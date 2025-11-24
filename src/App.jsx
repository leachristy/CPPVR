import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/home.jsx'
import { Projects } from './pages/Projects.jsx'
import { About } from './pages/About.jsx'
import { People } from './pages/People.jsx'
import { Technology } from './pages/Technology.jsx'
import { Contact } from './pages/Contact.jsx'
import { Footer } from './components/footer.jsx'
import './index.css'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About /> } />
        <Route path="/people" element={<People />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact/> } />
      </Routes>
    <Footer />
    </>
  )
}

export default App
