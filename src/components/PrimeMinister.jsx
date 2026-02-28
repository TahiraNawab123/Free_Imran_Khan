function PrimeMinister() {
  return (
    <section id="prime-minister" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-navy to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter Four</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Prime Minister Era</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Imran Khan took office as the <span className="text-white font-semibold">22nd Prime Minister of Pakistan</span> on August 18, 2018, following a historic electoral victory. His government inherited a nation facing severe economic challenges, including a mounting balance of payments crisis, soaring debt, and widespread corruption that had plagued the country's political establishment for decades.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            One of the defining features of Imran Khan's government was its commitment to <span className="text-white font-semibold">accountability</span>. Unlike previous governments that targeted political opponents, the PTI government focused on holding corrupt officials accountable, including launching investigations against former Prime Ministers <span className="text-white font-semibold">Nawaz Sharif</span> and <span className="text-white font-semibold">Shahbaz Sharif</span> in the Ashiana Housing and Ramonda cases. This stance on accountability drew both praise and controversy.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">Ehsaas Program</span> emerged as a cornerstone of Imran Khan's social welfare initiatives. This unprecedented social safety net program was designed to alleviate poverty, provide economic assistance to the vulnerable, and create opportunities for the marginalized sections of society. The program encompassed various facets including education stipends, health coverage, and income support.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            In foreign policy, Imran Khan pursued an independent foreign policy, seeking to balance relations with all major powers while prioritizing Pakistan's national interests. A significant moment came in February 2022 when he became the first Pakistani Prime Minister to visit <span className="text-white font-semibold">Russia</span>, meeting President Putin on the day Russia began its military operation in Ukraine. His government also played a crucial role in facilitating the <span className="text-white font-semibold">US-Taliban peace talks</span> that led to the Doha Agreement in 2020.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">COVID-19 Pandemic</span> presented an unprecedented challenge, and Imran Khan's government implemented measures that balanced public health with economic considerations. While initial lockdowns were imposed, the government later adopted a more targeted approach. Pakistan's COVID-19 response was recognized for its emphasis on protecting the vulnerable and maintaining economic activity. The government launched vaccination campaigns and secured vaccines through multiple channels.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Other notable initiatives included the <span className="text-white font-semibold">Naya Pakistan Housing Scheme</span> aimed at providing affordable housing for the poor and middle class, educational reforms to improve the quality of education, and efforts to attract foreign investment. His government's vision of "<span className="text-white font-semibold">Tabdeeli</span>" (Change) resonated with millions of Pakistanis who sought a break from the traditional political elite.
          </p>

          {/* Key Achievements Grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-4"> </div>
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Ehsaas Program</h4>
              <p className="font-poppins text-white/60">Pakistan's largest social safety net program for poverty alleviation</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-4"> </div>
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">Independent Foreign Policy</h4>
              <p className="font-poppins text-white/60">Balanced relations with all nations while prioritizing national interests</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-4"> </div>
              <h4 className="font-montserrat font-bold text-white text-xl mb-2">COVID-19 Response</h4>
              <p className="font-poppins text-white/60">Managed pandemic with focus on vulnerable population protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimeMinister
