export default function CTAFinal() {
  return (
    <section id="join" className="relative bg-[#FFE135] py-24 overflow-hidden">
      {/* Texto wallpaper */}
      <div className="absolute inset-0 flex flex-col justify-center gap-0 -rotate-6 scale-150 opacity-[0.06] select-none pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="text-[#1A0533] text-[100px] font-black whitespace-nowrap leading-none"
          >
            CRECEMOS&nbsp;&nbsp;CRECEMOS&nbsp;&nbsp;CRECEMOS
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#1A0533]/50 text-xs font-bold tracking-widest uppercase mb-6">
          CTA Final
        </p>
        <h2 className="text-6xl md:text-8xl font-black text-[#1A0533] leading-[0.9] tracking-tighter mb-8">
          Cuando una
          <br />
          mujer crece,
          <br />
          <span className="text-[#FF2D78]">
            CRECEMOS
            <br />
            TODAS.
          </span>
        </h2>
        <p className="text-[#1A0533]/60 text-lg mb-12 max-w-md mx-auto">
          Únete a nuestra comunidad y comienza a transformar tu sueño en un
          negocio real.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-[#1A0533] hover:bg-[#2D0A5E] text-white font-black text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl"
        >
          Unirme a la Comunidad
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
