import { FiAward, FiBook, FiHeart, FiUsers, FiZap } from "react-icons/fi";

const features = [
  {
    icon: <FiAward size={24} />,
    label: "Mentoría",
    sub: "Conecta con expertas en tu industria y recibe orientación personalizada.",
  },
  {
    icon: <FiBook size={24} />,
    label: "Promoción",
    sub: "Visibilidad digital",
  },
  {
    icon: <FiZap size={24} />,
    label: "Capacitación",
    sub: "Talleres gratuitos",
  },
  {
    icon: <FiUsers size={24} />,
    label: "Alianzas",
    sub: "Colaboración",
  },
  {
    icon: <FiHeart size={24} />,
    label: "Comunidad",
    sub: "Apoyo mutuo",
  },
];

export default function Comunidad() {
  return (
    <section id="comunidad" className="bg-[#3B1D4F] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="text-[#C89B4D] text-xs font-bold tracking-[0.28em] uppercase">
              Comunidad
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F8F7F4] leading-tight mt-3">
              Somos
              <br />
              <span className="text-[#B89ACD]">Mujeres</span> de
              <br />
              Impacto
            </h2>
          </div>
          <div>
            <p className="text-[#F8F7F4]/70 text-lg leading-relaxed">
              Nuestra misión es acompañar a mujeres emprendedoras, impulsarlas
              con herramientas reales y ayudarlas a crecer de manera sostenible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border border-[#F8F7F4]/10 hover:border-[#C89B4D]/60 transition-all cursor-pointer hover:-translate-y-1 ${
                i === 2 ? "bg-[#C89B4D]/10" : "bg-[#F8F7F4]/10"
              }`}
            >
              <div className="mb-4 text-[#B89ACD]">{f.icon}</div>
              <p className="font-black text-[#F8F7F4] text-sm">{f.label}</p>
              <p className="text-[#F8F7F4]/60 text-xs mt-1">{f.sub}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C89B4D] scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
