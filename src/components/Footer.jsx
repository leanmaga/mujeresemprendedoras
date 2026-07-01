import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3B1D4F] py-12 border-t border-[#F8F7F4]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C89B4D] flex items-center justify-center overflow-hidden">
            <Image
              src="/logopng.png"
              alt="Logo Mujeres de Impacto Emprenden"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-black text-[#F8F7F4] text-sm leading-tight">
              Mujeres de Impacto
              <br />
              <span className="text-[#B89ACD]">Emprenden</span>
            </p>
          </div>
        </div>

        <p className="text-[#F8F7F4]/70 font-bold text-lg">
          Juntas somos <span className="text-[#F8F7F4]">imparables.</span>
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {[
              {
                label: "IG",
                href: "https://linktr.ee/dmujeramujer8?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASjma5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac2PVczHXFsGnvN02s6no8SJvCIsmb_HFVECyeqs084wVkLAaYjmKBoVzkdNQ_aem_cxxH1xve8oHTx7LzK-cMmQ",
              },
              {
                label: "YT",
                href: "https://www.youtube.com/@demujeramujerpodcast",
              },
              {
                label: "TT",
                href: "https://www.tiktok.com/@demujeramujer.col",
              },
              {
                label: "TH",
                href: "https://www.threads.com/@demujeramujer.col",
              },
              {
                label: "SP",
                href: "https://open.spotify.com/show/0OKo7E6ECwkG78t1srFYS4",
              },
              { label: "WA", href: "https://tr.ee/LBGiCoDmjR" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#F8F7F4]/15 hover:border-[#C89B4D] flex items-center justify-center text-[#F8F7F4]/50 hover:text-[#C89B4D] text-xs font-bold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-[#F8F7F4]/40 text-xs">
            contacto@mujeresdeimpacto.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-8 pt-6 border-t border-[#F8F7F4]/10 text-[#F8F7F4]/30 text-xs">
        © {new Date().getFullYear()} Mujeres de Impacto Emprenden. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
