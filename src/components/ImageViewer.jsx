import { useState, useEffect } from 'react'

function ImageViewer({ images, currentIndex, onClose, onNext, onPrev }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - left) / width) * 100
      const y = ((e.clientY - top) / height) * 100
      setMousePosition({ x, y })
    }
  }

  const handleNavigate = (index) => {
    // This function will be passed from parent
  }

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-6 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={onNext}
            className="absolute right-6 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={`max-w-full max-h-[85vh] object-contain transition-transform duration-300 ${
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          style={{
            transform: isZoomed ? 'scale(2)' : 'scale(1)',
            transformOrigin: isZoomed ? `${mousePosition.x}% ${mousePosition.y}%` : 'center center'
          }}
        />
      </div>

      {/* Image Info & Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full">
          <span className="text-white/80 font-poppins text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        {currentImage.caption && (
          <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full max-w-md">
            <p className="text-white font-poppins text-sm truncate">{currentImage.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto pb-2">
        {images.slice(Math.max(0, currentIndex - 4), currentIndex + 5).map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              const actualIndex = Math.max(0, currentIndex - 4) + idx
              onNavigate(actualIndex)
            }}
            className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              Math.max(0, currentIndex - 4) + idx === currentIndex 
                ? 'border-blue-accent opacity-100' 
                : 'border-white/20 opacity-50 hover:opacity-80'
            }`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageViewer

