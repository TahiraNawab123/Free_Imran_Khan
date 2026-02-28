import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import EarlyLife from './components/EarlyLife'
import CricketCareer from './components/CricketCareer'
import PoliticalJourney from './components/PoliticalJourney'
import PrimeMinister from './components/PrimeMinister'
import Struggles from './components/Struggles'
import PersonalVision from './components/PersonalVision'
import Gallery from './components/Gallery'
import GalleryCategory from './pages/GalleryCategory'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function MainContent() {
  const location = useLocation()
  
  // Only show main content sections when at root
  if (location.pathname === '/') {
    return (
      <>
        <Hero />
        <EarlyLife />
        <CricketCareer />
        <PoliticalJourney />
        <PrimeMinister />
        <Struggles />
        <PersonalVision />
        <Gallery />
      </>
    )
  }
  
  return null
}

function App() {
  return (
    <div className="min-h-screen w-full bg-deep-black overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/gallery/:category" element={<GalleryCategory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

