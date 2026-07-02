import Image from "next/image";

export default function Fundacion() {
  return (
    <section
      id="fundacion"
      className="bg-[#F8F7F4] py-12 sm:py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <Image
                src="/mujeres2.jpg"
                alt="De mujer a mujer"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B1D4F]/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#C89B4D] rounded-2xl p-5 max-w-[180px]">
              <p className="text-[#3B1D4F] text-3xl font-black">+500</p>
              <p className="text-[#3B1D4F]/70 text-xs font-bold uppercase tracking-[0.2em] mt-1">
                Mujeres apoyadas
              </p>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-[#7D5BA6]/30" />
          </div>

          <div className="order-1 md:order-2">
            <span className="text-[#7D5BA6] text-xs font-bold tracking-[0.28em] uppercase">
              Fundación
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-[#3B1D4F] leading-tight mt-2 md:mt-3 mb-4 md:mb-8">
              DE MUJER
              <br />
              <span className="text-[#C89B4D]">A MUJER</span>
            </h2>
            <p className="text-[#3B1D4F]/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10">
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
                  <div className="w-1 h-1 rounded-full bg-[#7D5BA6] flex-shrink-0" />
                  <span className="text-[#3B1D4F]/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
