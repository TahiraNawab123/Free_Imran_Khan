import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-deep-black/90 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="font-montserrat text-lg md:text-xl font-extrabold tracking-wide">
        <span className="text-white">Free </span>
        <span className="text-emerald-light">Imran Khan</span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 md:gap-10">
        <a 
          href="#" 
          className="font-montserrat text-xs md:text-sm font-semibold text-white/80 hover:text-emerald-light transition-colors duration-200 tracking-widest uppercase relative group"
        >
          Stand for Justice
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-light transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

