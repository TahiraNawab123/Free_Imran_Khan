function Struggles() {
  return (
    <section id="struggles" className="min-h-screen w-full py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-dark-blue to-deep-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-accent font-montserrat text-sm tracking-[0.3em] uppercase font-semibold">Chapter Five</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mt-4 tracking-wide">Struggles & Imprisonment</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-emerald-400 mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Imran Khan's political career has been marked by relentless struggles and battles against what he perceived as systemic injustice and political victimization. From the very beginning, he faced resistance from the established political elite who viewed his anti-corruption agenda as a threat to their hold on power.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            In <span className="text-white font-semibold">April 2022</span>, a dramatic turn of events unfolded when Imran Khan became the first Pakistani Prime Minister to be removed from office through a <span className="text-white font-semibold">no-confidence motion</span> in the National Assembly. The vote, which was supported by the combined opposition, marked a significant turning point in Pakistan's political landscape. Khan claimed the vote was part of a foreign conspiracy to remove his government, allegations that resonated with his supporters.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Following his removal from office, Imran Khan faced an escalating campaign of legal challenges and cases. Multiple FIRs (First Information Reports) were registered against him, ranging from <span className="text-white font-semibold">corruption allegations</span> to accusations of inciting violence. The <span className="text-white font-semibold">Cipher Case</span> became particularly significant, with Khan accused of mishandling a diplomatic cable related to US-Pakistan relations. The <span className="text-white font-semibold">Toshakhana Case</span> involved allegations of illegal possession of gifts received during his tenure as Prime Minister.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">Al-Qadir Trust Case</span> emerged as another major legal battle, with Khan and his wife Bushra Bibi accused of financial irregularities related to trust funds. These cases, which Khan and his supporters consistently termed as "<span className="text-white font-semibold">political victimization</span>", became central to his narrative of fighting against a system that sought to silence him.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            In <span className="text-white font-semibold">August 2023</span>, Imran Khan was arrested in a dramatic pre-dawn raid at his residence in Lahore. His arrest sent shockwaves across the nation and triggered widespread protests by his supporters. Despite being imprisoned, Khan continued to maintain his innocence and used the platform to voice his political ideology, addressing supporters through letters and occasional court appearances.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            The <span className="text-white font-semibold">2024 General Elections</span> represented another chapter in Khan's political saga. Despite being incarcerated, PTI candidates (many running as independents due to symbol restrictions) achieved significant electoral success, with unofficial results showing PTI as the single largest party by vote count. However, the formation of the new government faced controversies and allegations of engineering, with Khan's supporters claiming the electoral process was compromised.
          </p>

          <p className="font-poppins text-lg md:text-xl leading-relaxed text-white/80">
            Throughout his imprisonment, Imran Khan has maintained his position as a influential political figure, with his party continuing to command substantial public support. His resilience in the face of legal battles and imprisonment has been characterized by his supporters as a continuation of his lifelong fight for justice and accountability in Pakistan.
          </p>

          {/* Timeline of Struggles */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-500/10 border border-red-500/30">
              <span className="text-red-400 font-montserrat font-bold">April 2022</span>
              <h4 className="font-montserrat font-bold text-white text-lg mt-2">No-Confidence Vote</h4>
              <p className="font-poppins text-white/60 mt-2">Removed from office through parliamentary vote</p>
            </div>
            <div className="p-6 bg-red-500/10 border border-red-500/30">
              <span className="text-red-400 font-montserrat font-bold">May 2023</span>
              <h4 className="font-montserrat font-bold text-white text-lg mt-2">Arrest Warrants</h4>
              <p className="font-poppins text-white/60 mt-2">Multiple arrest warrants issued in various cases</p>
            </div>
            <div className="p-6 bg-red-500/10 border border-red-500/30">
              <span className="text-red-400 font-montserrat font-bold">August 2023</span>
              <h4 className="font-montserrat font-bold text-white text-lg mt-2">Imprisonment</h4>
              <p className="font-poppins text-white/60 mt-2">Arrested and imprisoned in Adiala Jail, Rawalpindi</p>
            </div>
            <div className="p-6 bg-red-500/10 border border-red-500/30">
              <span className="text-red-400 font-montserrat font-bold">February 2024</span>
              <h4 className="font-montserrat font-bold text-white text-lg mt-2">General Elections</h4>
              <p className="font-poppins text-white/60 mt-2">PTI wins popular vote despite Khan's imprisonment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Struggles
