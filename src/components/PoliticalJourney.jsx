function PoliticalJourney() {
  return (
    <section id="political-journey" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-dark-blue to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter Three</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Political Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            After retiring from cricket in 1992, Imran Khan transitioned into politics, founding <span className="text-white font-semibold">Pakistan Tehreek-e-Insaf (PTI)</span> in <span className="text-white font-semibold">1996</span>. His political vision was centered on establishing a corruption-free Pakistan, an Islamic welfare state, and a system that prioritized the interests of the common people over the political elite.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The early years of PTI were marked by significant challenges. Facing a political landscape dominated by established parties, Imran Khan's movement struggled to gain traction. However, his unwavering commitment to his principles and his refusal to compromise on anti-corruption stances gradually attracted supporters, particularly among the youth and middle class of Pakistan.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            A major breakthrough came in the <span className="text-white font-semibold">2002 General Elections</span>, when PTI won seats in the National Assembly for the first time. Imran Khan himself was elected as a Member of the National Assembly (MNA) from NA-56 (Mianwali), marking his entry into parliamentary politics. His political presence continued to grow over the following years.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The year <span className="text-white font-semibold">2013</span> marked a turning point in Pakistani politics when PTI emerged as the second-largest party in the General Elections. Imran Khan led PTI to form the government in <span className="text-white font-semibold">Khyber Pakhtunkhwa (KP)</span> province, implementing various reformist policies that showcased his vision for governance.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">2018 General Elections</span> proved to be a historic moment when PTI won a majority in the National Assembly, making Imran Khan the <span className="text-white font-semibold">22nd Prime Minister of Pakistan</span>. This victory represented the culmination of over two decades of political struggle and the realization of a dream to transform Pakistan into a just and prosperous nation.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Throughout his political journey, Imran Khan has organized numerous public rallies and protests, with the <span className="text-white font-semibold">Azadi March</span> in 2014 being particularly significant. Tens of thousands of supporters gathered in Islamabad demanding electoral reforms and an end to alleged rigged elections. These protests demonstrated the growing popular support for his political movement and his ability to mobilize masses around his vision for Pakistan.
          </p>

          {/* Timeline */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-accent/20 border border-blue-accent">
                <span className="font-montserrat font-bold text-blue-accent">1996</span>
              </div>
              <div className="flex-1">
                <h4 className="font-montserrat font-bold text-white text-lg">PTI Founded</h4>
                <p className="font-poppins text-white/60">Pakistan Tehreek-e-Insaf established with vision of corruption-free Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-accent/20 border border-blue-accent">
                <span className="font-montserrat font-bold text-blue-accent">2013</span>
              </div>
              <div className="flex-1">
                <h4 className="font-montserrat font-bold text-white text-lg">KP Government</h4>
                <p className="font-poppins text-white/60">PTI forms government in Khyber Pakhtunkhwa, becomes 2nd largest party nationally</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-accent/20 border border-blue-accent">
                <span className="font-montserrat font-bold text-blue-accent">2018</span>
              </div>
              <div className="flex-1">
                <h4 className="font-montserrat font-bold text-white text-lg">Prime Minister</h4>
                <p className="font-poppins text-white/60">PTI wins majority, Imran Khan becomes 22nd Prime Minister of Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PoliticalJourney
