function Hero() {
  return (
    <section className="h-full w-full flex items-center justify-center pt-16 pb-20 px-5 md:px-12 relative overflow-hidden">
      {/* Background Effects - Black and Blue Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-dark-blue to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_center,rgba(30,58,95,0.15)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08)_0%,transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,27,46,0.12)_0%,transparent_50%)]"></div>
      
      {/* Main Content */}
      <div className="h-full w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <p className="font-montserrat text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/90">
            <span className="text-white font-semibold">Imran Khan</span> stands as a symbol of{' '}
            <span className="text-blue-light font-semibold">resilience</span>,{' '}
            <span className="text-blue-light font-semibold">courage</span>, and unwavering commitment to{' '}
            <span className="text-blue-accent font-semibold">justice</span>. A leader who challenged corruption and raised the voice of the people, he inspired millions with his vision of a sovereign and dignified nation. His struggle represents more than politics — it represents hope, accountability, and the dream of true{' '}
            <span className="text-blue-light font-semibold">freedom</span>.
            <br /><br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide">
              Free Imran Khan.
            </span>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* Clean Image Container - No borders, no glows, slightly larger */}
            <div className="relative w-[28rem] h-[28rem] md:w-[44rem] md:h-[48rem] lg:w-[52rem] lg:h-[56rem] overflow-hidden shadow-2xl">
              {/* Image - High Quality Rendering */}
              <img 
                src="/imran_khan_image.png" 
                alt="Imran Khan - Leader of Pakistan"
                className="w-full h-full object-contain object-center filter brightness-[0.95] contrast-[1.05] saturate-[1.02]"
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
