function PersonalVision() {
  return (
    <section id="personal-vision" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-navy to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter Six</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Personal Vision</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            At the core of Imran Khan's political ideology lies the vision of "<span className="text-white font-semibold">Naya Pakistan</span>" (New Pakistan) — a nation built on the principles of justice, sovereignty, and dignity. This vision represents a fundamental transformation of Pakistan's political, economic, and social systems to create a state that truly serves its people.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Imran Khan is a staunch advocate of a <span className="text-white font-semibold">Riba-free (interest-free) economy</span>, believing that conventional interest-based financial systems are inherently unjust and perpetuate wealth inequality. His vision includes Islamic economic principles that promote equitable distribution of wealth and protect the poor from exploitation by financial institutions.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The concept of an <span className="text-white font-semibold">Islamic Welfare State</span> forms another cornerstone of his vision. Khan believes in a system where the state takes responsibility for providing basic necessities — education, healthcare, and housing — to all citizens, particularly the underprivileged. This vision draws inspiration from the Islamic principle of collective responsibility towards the less fortunate.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            <span className="text-white font-semibold">Azadi (Freedom)</span> and <span className="text-white font-semibold">Ghairat (Dignity)</span> are central themes in Khan's political narrative. He emphasizes Pakistan's right to make independent foreign policy decisions free from external pressure, particularly from Western powers. His vision seeks to restore Pakistan's dignity on the global stage while maintaining peaceful relations with all nations.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Education and healthcare reforms feature prominently in his vision for Pakistan. Khan envisions a Pakistan where every child has access to quality education regardless of their socioeconomic background, and where healthcare is accessible to all. His government initiated steps in these directions through various programs aimed at improving public education and healthcare infrastructure.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The principle of <span className="text-white font-semibold">self-reliance</span> (Khudai Khidmatgar) is deeply embedded in Khan's philosophy. He advocates for a Pakistan that depends less on foreign aid and more on its own resources and human potential. This includes promoting domestic industry, agriculture, and technological advancement to create a self-sustaining economy.
          </p>

          {/* Vision Pillars */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Naya Pakistan</h4>
              <p className="font-poppins text-white/60">A vision for a new, just, and prosperous Pakistan</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Islamic Welfare State</h4>
              <p className="font-poppins text-white/60">State responsibility for education, healthcare, and housing</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Riba-Free Economy</h4>
              <p className="font-poppins text-white/60">Interest-free financial system based on Islamic principles</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Azadi o Ghairat</h4>
              <p className="font-poppins text-white/60">Freedom and dignity in foreign and domestic policy</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Anti-Corruption</h4>
              <p className="font-poppins text-white/60">Accountability regardless of political affiliation</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Self-Reliance</h4>
              <p className="font-poppins text-white/60">Building a self-sustaining economy through domestic resources</p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 p-10 bg-gradient-to-r from-blue-accent/20 to-emerald-400/20 border border-white/10">
            <blockquote className="font-montserrat text-2xl md:text-3xl font-bold text-white text-center italic">
              "We will not bow down to anyone. We will live with dignity and sovereignty."
            </blockquote>
            <p className="font-poppins text-white/60 text-center mt-6">— Imran Khan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalVision
