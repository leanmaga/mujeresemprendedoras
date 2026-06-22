const beneficios = [
  {
    num: "01",
    title: "Visibilidad",
    sub: "Tu marca, amplificada",
    color: "border-[#FFE135]",
    accent: "text-[#FFE135]",
  },
  {
    num: "02",
    title: "Colaboración",
    sub: "Proyectos en conjunto",
    color: "border-[#FF2D78]",
    accent: "text-[#FF2D78]",
  },
  {
    num: "03",
    title: "Talleres Gratuitos",
    sub: "Aprendizaje continuo",
    color: "border-purple-400",
    accent: "text-purple-400",
  },
  {
    num: "04",
    title: "Mentoría",
    sub: "Guía personalizada",
    color: "border-[#FFE135]",
    accent: "text-[#FFE135]",
  },
  {
    num: "05",
    title: "Crecimiento",
    sub: "Personal y profesional",
    color: "border-[#FF2D78]",
    accent: "text-[#FF2D78]",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#1A0533] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-16">
          <span className="text-[#FFE135] text-xs font-bold tracking-widest uppercase">
            Beneficios
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mt-3">
            Haz Crecer Tu
            <br />
            <span className="text-[#FF2D78]">Emprendimiento</span>
          </h2>
        </div>

        {/* Lista estilo editorial */}
        <div className="space-y-0">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className={`group flex items-center justify-between py-8 border-t border-white/10 hover:border-white/30 transition-all cursor-pointer`}
            >
              <div className="flex items-center gap-8">
                <span className={`text-xs font-bold ${b.accent} w-8`}>
                  {b.num}
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white group-hover:translate-x-2 transition-transform">
                  {b.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-white/30 text-sm hidden md:block">
                  {b.sub}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border ${b.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
