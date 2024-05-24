import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Research from './components/Research'
// import './styles/global.css'
const App = () => {
  return (
   <>
    <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px6">
      <HeroSection/>
      <About/>
      <Research />
    </div>
   </>
  )
}

export default App
