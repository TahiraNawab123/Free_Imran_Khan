import { Link } from 'react-router-dom'

function Gallery() {
  const categories = [
    {
      id: '1992-world-cup',
      title: '1992 World Cup',
      description: 'Historic moments from Pakistan\'s historic World Cup victory - The night that united a nation.',
      icon: ' ',
      imageCount: 20,
      gradient: 'from-amber-500 to-orange-700'
    },
    {
      id: 'cricket-career',
      title: 'Cricket Career',
      description: 'The journey of Pakistan\'s greatest all-rounder - From debut to legendary status.',
      icon: ' ',
      imageCount: 20,
      gradient: 'from-emerald-500 to-green-700'
    },
    {
      id: 'political-career',
      title: 'Political Career',
      description: 'Two decades of political struggle - From PTI founding to becoming Prime Minister.',
      icon: ' ',
      imageCount: 20,
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      id: 'public-address',
      title: 'Public Rallies',
      description: 'Mass rallies, public speeches, and campaign moments that inspired millions.',
      icon: ' ',
      imageCount: 20,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'social-events',
      title: 'National Events',
      description: 'Moments of unity, national celebrations, and humanitarian initiatives.',
      icon: ' ',
      imageCount: 20,
      gradient: 'from-rose-500 to-red-700'
    }
  ]

  return (
    <section id="gallery" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-dark-blue to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6 mx-auto"></div>
          <p className="font-poppins text-white/60 mt-6 max-w-2xl mx-auto">
            Explore the visual chronicle of Imran Khan's remarkable journey. Click on any category to view the collection.
          </p>
        </div>

        {/* Gallery Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/gallery/${category.id}`}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-400/50 transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="font-poppins text-white/60 mt-3 leading-relaxed text-sm">
                  {category.description}
                </p>
                
                {/* Image Count */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-montserrat text-sm text-white/40">
                    {category.imageCount} photos
                  </span>
                  <span className="flex items-center gap-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="font-montserrat text-sm font-semibold">View All</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

