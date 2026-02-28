import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Early Life', href: '#early-life' },
    { name: 'Cricket Career', href: '#cricket-career' },
    { name: 'Political Journey', href: '#political-journey' },
    { name: 'Prime Minister', href: '#prime-minister' },
    { name: 'Struggles', href: '#struggles' },
    { name: 'Personal Vision', href: '#personal-vision' },
    { name: 'Gallery', href: '#gallery' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-deep-black/95 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-montserrat text-lg md:text-xl font-extrabold tracking-wide">
          <span className="text-white">Free </span>
          <span className="text-blue-accent">Imran Khan</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-montserrat text-sm font-semibold text-white/70 hover:text-blue-accent transition-colors duration-200 tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-deep-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-montserrat text-base font-semibold text-white/70 hover:text-blue-accent transition-colors duration-200 py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

