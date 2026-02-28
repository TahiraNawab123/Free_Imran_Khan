function EarlyLife() {
  return (
    <section id="early-life" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-dark-blue to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,rgba(30,58,95,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter One</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Early Life</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
              Born on <span className="text-white font-semibold">October 5, 1952</span>, in the historic city of <span className="text-white font-semibold">Lahore</span>, Imran Khan hails from the prestigious <span className="text-white font-semibold">Niazi tribe</span> of Pashtun ancestry. His grandfather, Khan Bahadur Khan Niazi, served as a distinguished colonial-era administrator, while his father, Ikramullah Khan Niazi, was a civil servant and politician.
            </p>
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
              Imran's formative years were shaped at the renowned <span className="text-white font-semibold">Aitchison College</span> in Lahore, one of Pakistan's most prestigious educational institutions. It was here that his leadership qualities and competitive spirit first emerged, setting the foundation for his future endeavors.
            </p>
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
              After completing his schooling, Imran pursued higher education at England's <span className="text-white font-semibold">Keble College, Oxford</span>, where he studied Philosophy, Politics, and Economics (PPE). During his time at Oxford, he represented the university in cricket, captaining the Oxford Cricket Team and earning recognition as a promising all-rounder.
            </p>
          </div>
          <div className="space-y-6">
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
              Imran Khan was introduced to cricket at a young age, displaying exceptional talent that would soon capture the nation's attention. His early years were marked by a unique blend of academic excellence and sporting prowess, demonstrating the versatility that would define his remarkable career.
            </p>
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
              The transition from a privileged aristocratic background to the rigorous world of professional cricket required immense dedication. Imran channeled his energy into honing his skills, rapidly ascending through the ranks of Pakistani cricket to become one of its most celebrated figures.
            </p>
            <div className="mt-8 p-6 border-l-4 border-blue-accent bg-white/5 backdrop-blur-sm">
              <p className="font-montserrat text-xl font-bold text-white italic">"I never made it a secret — I play to win. And I will never compromise on that principle."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EarlyLife
