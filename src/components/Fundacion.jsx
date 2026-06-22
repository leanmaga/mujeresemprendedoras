import Image from "next/image";

export default function Fundacion() {
  return (
    <section id="fundacion" className="bg-[#0D0020] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Imagen con collage */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <Image
                src="/mujeres2.jpg"
                alt="De mujer a mujer"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0020]/80 via-transparent to-transparent" />
            </div>

            {/* Tarjeta superpuesta */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFE135] rounded-2xl p-5 max-w-[180px]">
              <p className="text-[#1A0533] text-3xl font-black">+500</p>
              <p className="text-[#1A0533]/70 text-xs font-bold uppercase tracking-wider mt-1">
                Mujeres apoyadas
              </p>
            </div>

            {/* Acento */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-[#FF2D78]/30" />
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <span className="text-[#FF2D78] text-xs font-bold tracking-widest uppercase">
              Fundación
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mt-3 mb-8">
              DE MUJER
              <br />
              <span className="text-[#FFE135]">A MUJER</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Apoyo emocional entre mujeres que entienden tus desafíos.
              Ofrecemos círculos de contención, gestión del estrés y crecimiento
              real.
            </p>

            <div className="space-y-4">
              {[
                "Círculos de contención mensuales",
                "Gestión del estrés y bienestar",
                "Talleres de desarrollo personal",
                "Mentoría entre pares",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1 h-1 rounded-full bg-[#FF2D78] flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
