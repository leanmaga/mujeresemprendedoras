const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@demujeramujerpodcast" },
  { label: "TikTok", href: "https://www.tiktok.com/@demujeramujer.col" },
  { label: "Threads", href: "https://www.threads.com/@demujeramujer.col" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/0OKo7E6ECwkG78t1srFYS4",
  },
];

export default function CTAFinal() {
  return (
    <section
      id="join"
      className="relative bg-[#C89B4D] py-12 sm:py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-0 -rotate-6 sm:scale-150 opacity-[0.08] select-none pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="text-[#3B1D4F] text-[60px] sm:text-[100px] font-black whitespace-nowrap leading-none"
          >
            CRECEMOS&nbsp;&nbsp;CRECEMOS&nbsp;&nbsp;CRECEMOS
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-16 text-center">
        <p className="text-[#3B1D4F]/60 text-xs font-bold tracking-[0.28em] uppercase mb-6">
          Unete al canal de WhatsApp
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#3B1D4F] leading-[0.95] tracking-[0.16em] mb-4 md:mb-8">
          Bienvenida a
          <br />
          Mujeres de Impacto
          <br />
          <span className="text-[#7D5BA6]">Emprenden</span>
        </h2>
        <p className="text-[#3B1D4F]/70 text-sm sm:text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
          Una comunidad creada para conectar, visibilizar e impulsar negocios
          liderados por mujeres. Aquí encontrarás networking, promoción de tu
          emprendimiento, alianzas, apoyo entre emprendedoras y capacitaciones
          para crecer.
        </p>
        <p className="text-[#3B1D4F]/70 text-xs sm:text-sm md:text-base mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Beneficio exclusivo: las integrantes podrán participar en talleres
          gratuitos de la Fundación De Mujer a Mujer sobre gestión de emociones,
          manejo del estrés, violencia basada en género, círculos de apoyo y
          liderazgo.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://tr.ee/LBGiCoDmjR"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#3B1D4F] hover:bg-[#7D5BA6] text-[#F8F7F4] font-black text-sm uppercase tracking-[0.22em] px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl"
          >
            Unirme al canal de WhatsApp
          </a>
          <a
            href="https://linktr.ee/dmujeramujer8?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASjma5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac2PVczHXFsGnvN02s6no8SJvCIsmb_HFVECyeqs084wVkLAaYjmKBoVzkdNQ_aem_cxxH1xve8oHTx7LzK-cMmQ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-[#3B1D4F]/30 bg-[#F8F7F4]/70 hover:bg-[#F8F7F4] text-[#3B1D4F] font-black text-sm uppercase tracking-[0.22em] px-10 py-5 rounded-full transition-all hover:scale-105"
          >
            Ver redes y links
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B1D4F] hover:text-[#7D5BA6] transition-colors"
              >
                {link.label}
              </a>
              {index < socialLinks.length - 1 && (
                <span className="mx-3 md:mx-4 text-[#3B1D4F]/50">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
