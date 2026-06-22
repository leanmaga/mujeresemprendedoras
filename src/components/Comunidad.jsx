const features = [
  { icon: "🔗", label: "Networking", sub: "Conexiones reales" },
  { icon: "📢", label: "Promoción", sub: "Visibilidad digital" },
  { icon: "🎓", label: "Capacitación", sub: "Talleres gratuitos" },
  { icon: "🤝", label: "Alianzas", sub: "Colaboración" },
  { icon: "💜", label: "Comunidad", sub: "Apoyo mutuo" },
];

export default function Comunidad() {
  return (
    <section id="comunidad" className="bg-[#0D0020] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header asimétrico */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="text-[#FF2D78] text-xs font-bold tracking-widest uppercase">
              Comunidad
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mt-3">
              Somos
              <br />
              <span className="text-[#FFE135]">Mujeres</span> de
              <br />
              Impacto
            </h2>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed">
              Nuestra misión es acompañar a mujeres emprendedoras, impulsarlas
              con herramientas reales y ayudarlas a crecer de manera sostenible.
            </p>
          </div>
        </div>

        {/* Feature grid dramático */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border border-white/10 hover:border-[#FF2D78]/50 transition-all cursor-pointer hover:-translate-y-1 ${
                i === 2 ? "bg-[#FF2D78]/10" : "bg-white/5"
              }`}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <p className="font-black text-white text-sm">{f.label}</p>
              <p className="text-white/40 text-xs mt-1">{f.sub}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFE135] scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
