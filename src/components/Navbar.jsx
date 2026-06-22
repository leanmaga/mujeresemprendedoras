export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-16 flex items-center justify-between bg-[#1A0533]/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FFE135] flex items-center justify-center">
          <span className="text-[#1A0533] text-xs font-black">M</span>
        </div>
        <span className="font-black text-white text-sm leading-tight">
          Mujeres de
          <br />
          <span className="text-[#FFE135]">Impacto</span> Emprenden
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
        {["Comunidad", "Beneficios", "Fundación", "Testimonios"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#join"
        className="bg-[#FF2D78] hover:bg-[#FF2D78]/80 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105"
      >
        Únete
      </a>
    </nav>
  );
}
