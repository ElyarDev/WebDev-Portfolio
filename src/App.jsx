import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skill'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
    </>
  )
}

export default App
