import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <h1>🏠 Home Page</h1>
      <p>Welcome to my website! This is the home page.</p>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>👤 About Page</h1>
      <p>This page is about me and what I do.</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="page">
      <h1>📬 Contact Page</h1>
      <p>You can reach me through this page.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <span className="nav-brand">MyWebsite</span>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App