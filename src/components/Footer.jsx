export default function Footer() {
  return (
    <footer className="bg-[#0D0020] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFE135] flex items-center justify-center">
            <span className="text-[#1A0533] text-sm font-black">M</span>
          </div>
          <div>
            <p className="font-black text-white text-sm leading-tight">
              Mujeres de Impacto
              <br />
              <span className="text-[#FFE135]">Emprenden</span>
            </p>
          </div>
        </div>

        <p className="text-white/50 font-bold text-lg">
          Juntas somos <span className="text-white">imparables.</span>
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {[
              { label: "IG", href: "#" },
              { label: "LI", href: "#" },
              { label: "WA", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 rounded-full border border-white/10 hover:border-[#FF2D78] flex items-center justify-center text-white/40 hover:text-[#FF2D78] text-xs font-bold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-white/30 text-xs">contacto@mujeresdeimpacto.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-8 pt-6 border-t border-white/5 text-white/20 text-xs">
        © {new Date().getFullYear()} Mujeres de Impacto Emprenden. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
