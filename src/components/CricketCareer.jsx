function CricketCareer() {
  return (
    <section id="cricket-career" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-navy to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter Two</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Cricket Career</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Imran Khan made his international cricket debut in <span className="text-white font-semibold">1971</span>, marking the beginning of a legendary career that would span nearly two decades. Known for his exceptional all-round abilities, he established himself as one of the most complete cricketers of his generation, excelling both as a fast bowler and a aggressive batsman.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Throughout his cricket career, Imran represented Pakistan in <span className="text-white font-semibold">88 Test matches</span> and <span className="text-white font-semibold">175 One Day Internationals (ODIs)</span>. He amassed over <span className="text-white font-semibold">3,800 Test runs</span> with a highest score of 136, and claimed <span className="text-white font-semibold">362 Test wickets</span> at an impressive average. His ODI career yielded over <span className="text-white font-semibold">3,700 runs</span> and <span className="text-white font-semibold">146 wickets</span>, cementing his legacy as one of cricket's greatest all-rounders.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Imran Khan was bestowed with the honor of captaincy on multiple occasions, but his most <span className="text-white font-semibold">illustrious leadership role came in 1992</span> when he led Pakistan to its first and only Cricket World Cup victory. The tournament was a remarkable journey of resilience and determination, with Pakistan overcoming seemingly insurmountable odds to reach the final.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">1992 World Cup Final</span> against England at the Melbourne Cricket Ground remains one of the most iconic moments in cricketing history. Chasing a target of 249, Pakistan faced early setbacks, reducing to 24-2. However, Imran Khan, playing what would be his last ODI, led from the front with a monumental innings of <span className="text-white font-semibold">72 not out</span>, steering Pakistan to a historic victory with just two wickets remaining.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Known affectionately as <span className="text-white font-semibold">"Tiger Peshawari"</span> for his fierce competitiveness and aggressive style of play, Imran Khan transformed Pakistan into a formidable cricket team. His tactical genius, ability to inspire his team, and never-say-die attitude made him a legendary captain whose impact extended far beyond the cricket field.
          </p>

          {/* Stats Box */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <span className="text-4xl font-montserrat font-bold text-blue-accent">88</span>
              <p className="font-poppins text-white/60 mt-2">Test Matches</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <span className="text-4xl font-montserrat font-bold text-blue-accent">362</span>
              <p className="font-poppins text-white/60 mt-2">Test Wickets</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <span className="text-4xl font-montserrat font-bold text-blue-accent">3,807</span>
              <p className="font-poppins text-white/60 mt-2">Test Runs</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <span className="text-4xl font-montserrat font-bold text-blue-accent">1992</span>
              <p className="font-poppins text-white/60 mt-2">World Cup Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CricketCareer
