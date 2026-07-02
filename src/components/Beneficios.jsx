const beneficios = [
  {
    num: "01",
    title: "Visibilidad",
    sub: "Tu marca, amplificada",
    color: "border-[#C89B4D]",
    accent: "text-[#C89B4D]",
  },
  {
    num: "02",
    title: "Colaboración",
    sub: "Proyectos en conjunto",
    color: "border-[#7D5BA6]",
    accent: "text-[#7D5BA6]",
  },
  {
    num: "03",
    title: "Talleres Gratuitos",
    sub: "Aprendizaje continuo",
    color: "border-[#B89ACD]",
    accent: "text-[#B89ACD]",
  },
  {
    num: "04",
    title: "Mentoría",
    sub: "Guía personalizada",
    color: "border-[#C89B4D]",
    accent: "text-[#C89B4D]",
  },
  {
    num: "05",
    title: "Crecimiento",
    sub: "Personal y profesional",
    color: "border-[#7D5BA6]",
    accent: "text-[#7D5BA6]",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#F8F7F4] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="mb-8 md:mb-16">
          <span className="text-[#7D5BA6] text-xs font-bold tracking-[0.28em] uppercase">
            Beneficios
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-[#3B1D4F] leading-tight mt-2 md:mt-3">
            Haz Crecer Tu
            <br />
            <span className="text-[#C89B4D]">Emprendimiento</span>
          </h2>
        </div>

        <div className="space-y-0">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-6 md:py-8 border-t border-[#3B1D4F]/10 hover:border-[#3B1D4F]/25 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
                <span className={`text-xs font-bold ${b.accent} w-8`}>
                  {b.num}
                </span>
                <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-[#3B1D4F] group-hover:translate-x-2 transition-transform">
                  {b.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[#3B1D4F]/55 text-sm hidden md:block">
                  {b.sub}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border ${b.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <svg
                    className="w-4 h-4 text-[#3B1D4F]"
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
          <div className="border-t border-[#3B1D4F]/10" />
        </div>
      </div>
    </section>
  );
}
