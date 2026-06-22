import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#1A0533] overflow-hidden min-h-screen flex items-center">
      {/* Texto wallpaper diagonal */}
      <div className="absolute inset-0 flex flex-col justify-center gap-0 -rotate-12 scale-150 opacity-[0.04] select-none pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="text-white text-[120px] font-black whitespace-nowrap leading-none tracking-tighter"
          >
            MUJERES&nbsp;&nbsp;MUJERES&nbsp;&nbsp;MUJERES&nbsp;&nbsp;MUJERES
          </div>
        ))}
      </div>

      {/* Mancha de color magenta */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#FF2D78] opacity-20 blur-[120px]" />
      {/* Mancha amarilla */}
      <div className="absolute bottom-[-50px] left-[20%] w-[400px] h-[400px] rounded-full bg-[#FFE135] opacity-15 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FF2D78]/20 border border-[#FF2D78]/40 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#FF2D78] animate-pulse" />
            <span className="text-[#FF2D78] text-xs font-bold tracking-widest uppercase">
              Comunidad activa
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
            IMPULSA
            <span className="text-[#FFE135]">MOS</span>
            <br />
            <span className="text-white/30">MUJERES</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm">
            que transforman sus sueños en negocios reales. Una comunidad que
            vibra contigo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#FFE135] hover:bg-[#FFE135]/90 text-[#1A0533] font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Quiero Formar Parte
              <svg
                className="w-4 h-4"
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
            <a
              href="#comunidad"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-semibold px-8 py-4 rounded-full transition-all"
            >
              Conocer más
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { num: "+500", label: "emprendedoras" },
              { num: "+50", label: "talleres" },
              { num: "+200", label: "proyectos" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-white">{s.num}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen con marco dramático */}
        <div className="relative">
          {/* Marco decorativo */}
          <div className="absolute -inset-4 border border-[#FFE135]/20 rounded-3xl" />
          <div className="absolute -inset-8 border border-[#FF2D78]/10 rounded-[2.5rem]" />

          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <Image
              src="/mujeres.jpg"
              alt="Emprendedoras"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={80}
              className="w-full h-full object-cover"
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0533] via-transparent to-transparent" />
          </div>

          {/* Badge flotante */}
          <div className="absolute -left-6 bottom-16 bg-[#FFE135] text-[#1A0533] rounded-2xl p-4 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider">
              Nuevo taller
            </p>
            <p className="text-sm font-black mt-0.5">Branding Personal</p>
          </div>

          {/* Dot decorativo */}
          <div className="absolute -right-4 top-12 w-8 h-8 rounded-full bg-[#FF2D78]" />
          <div className="absolute right-8 -top-4 w-4 h-4 rounded-full border-2 border-[#FFE135]" />
        </div>
      </div>
    </section>
  );
}
