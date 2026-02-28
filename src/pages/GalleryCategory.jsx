import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ImageViewer from '../components/ImageViewer'

function GalleryCategory() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Category data with 20 placeholder images each
  const categoryData = {
    '1992-world-cup': {
      title: '1992 World Cup Celebration',
      description: 'Historic moments from Pakistan\'s historic World Cup victory',
      icon: '🏆',
      color: 'amber',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/images/gallery/1992-world-cup/${i + 1}.jpg`,
        alt: `1992 World Cup Celebration ${i + 1}`,
        caption: `Historic moment ${i + 1} - Pakistan wins the 1992 Cricket World Cup`
      }))
    },
    'cricket-career': {
      title: 'Cricket Career Highlights',
      description: 'The journey of Pakistan\'s greatest all-rounder',
      icon: '🏏',
      color: 'emerald',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/images/gallery/cricket-career/${i + 1}.jpg`,
        alt: `Cricket Career ${i + 1}`,
        caption: `Cricket highlight ${i + 1} - Imran Khan's legendary career`
      }))
    },
    'political-career': {
      title: 'Political Career Events',
      description: 'Two decades of political struggle and achievement',
      icon: '🏛️',
      color: 'purple',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/images/gallery/political-career/${i + 1}.jpg`,
        alt: `Political Career ${i + 1}`,
        caption: `Political event ${i + 1} - PTI journey and achievements`
      }))
    },
    'public-address': {
      title: 'Public Address & Campaigns',
      description: 'Mass rallies, public speeches, and campaign moments',
      icon: '🎤',
      color: 'blue',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/images/gallery/public-address/${i + 1}.jpg`,
        alt: `Public Address ${i + 1}`,
        caption: `Public rally ${i + 1} - Addressing the nation`
      }))
    },
    'social-events': {
      title: 'Social & National Events',
      description: 'Moments of unity, national celebrations, and initiatives',
      icon: '🇵🇰',
      color: 'rose',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/images/gallery/social-events/${i + 1}.jpg`,
        alt: `Social Event ${i + 1}`,
        caption: `National event ${i + 1} - Moments of unity and celebration`
      }))
    }
  }

  const currentCategory = categoryData[category]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

  if (!currentCategory) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Category not found</h2>
          <Link to="/gallery" className="text-blue-accent hover:underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev + 1) % currentCategory.images.length)
  }

  const handlePrev = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev - 1 + currentCategory.images.length) % currentCategory.images.length)
  }

  const colorMap = {
    amber: { bg: 'from-amber-900/50', text: 'text-amber-400', border: 'border-amber-400/50' },
    emerald: { bg: 'from-emerald-900/50', text: 'text-emerald-400', border: 'border-emerald-400/50' },
    purple: { bg: 'from-purple-900/50', text: 'text-purple-400', border: 'border-purple-400/50' },
    blue: { bg: 'from-blue-900/50', text: 'text-blue-400', border: 'border-blue-400/50' },
    rose: { bg: 'from-rose-900/50', text: 'text-rose-400', border: 'border-rose-400/50' }
  }

  const colors = colorMap[currentCategory.color] || colorMap.blue

  return (
    <div className="min-h-screen w-full pt-16">
      {/* Hero Banner */}
      <section className="h-[40vh] w-full relative overflow-hidden flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-b ${colors.bg} to-deep-black`}></div>
        
        <div className="relative z-10 text-center px-5">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gallery
          </button>
          <div className="text-6xl mb-4">{currentCategory.icon}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-white mt-4 tracking-wide">
            {currentCategory.title}
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r ${colors.text} to-blue-accent mt-6 mx-auto`}></div>
          <p className="font-poppins text-white/60 mt-4 max-w-xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-16 md:py-24 px-5 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCategory.images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-accent/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2 opacity-50">{currentCategory.icon}</div>
                    <p className="font-montserrat text-xs text-white/30 uppercase">Image {index + 1}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${colors.text}/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4`}>
                  <span className="font-montserrat text-sm text-white font-semibold">
                    View Image
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Click Instruction */}
          <div className="mt-12 text-center">
            <p className="font-poppins text-white/50">
              Click on any image to view in full screen with zoom functionality
            </p>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage !== null && (
        <ImageViewer
          images={currentCategory.images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  )
}

export default GalleryCategory

