import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-16 flex items-center justify-between bg-[#F8F7F4]/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#3B1D4F]/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/logopng.png"
            alt="Logo Mujeres de Impacto Emprenden"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
        <span className="font-black text-[#3B1D4F] text-sm leading-tight">
          Mujeres de
          <br />
          <span className="text-[#7D5BA6]">Impacto</span> Emprenden
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3B1D4F]/70">
        {["Comunidad", "Beneficios", "Fundación", "Testimonios"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-[#3B1D4F] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#join"
        className="bg-[#3B1D4F] hover:bg-[#7D5BA6] text-[#F8F7F4] text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105"
      >
        Únete
      </a>
    </nav>
  );
}
