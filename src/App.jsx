import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="ivy-container">
      <header className="ivy-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Dartmouth_College_shield.svg"
          alt="Dartmouth College Shield"
          className="ivy-shield"
          style={{ width: 80, marginBottom: 16 }}
        />
        <h1>Jackson Smith</h1>
        <h2 className="ivy-subtitle">Graduate Student, Dartmouth College</h2>
      </header>
      <main>
        <section className="ivy-bio">
          <p>
            Welcome! I am a graduate student at <strong>Dartmouth College</strong>, passionate about academic excellence, research, and contributing to the vibrant Ivy League community. My interests span interdisciplinary studies, innovation, and leadership.
          </p>
          <p>
            Please feel free to connect with me:
          </p>
          <ul className="ivy-links">
            <li><a href="mailto:jackson.smith@dartmouth.edu">Email</a></li>
            <li><a href="https://www.linkedin.com/in/jacksonsmith" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>
      <footer className="ivy-footer">
        <small>&copy; {new Date().getFullYear()} Jackson Smith | Dartmouth College</small>
      </footer>
    </div>
  )
}

export default App
