"use client";
import { useState } from "react";
import Image from "next/image";

const testimonios = [
  {
    quote:
      "Esta comunidad me dio el empuje y la red que necesitaba para lanzar mi marca. En tres meses logré mis primeras ventas.",
    name: "Ana García",
    role: "Emprendedora Textil",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "Encontré aquí no solo clientes, sino socias. La comunidad me ayudó a crecer de una forma que no imaginaba posible.",
    name: "María López",
    role: "Diseñadora de Moda",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "Los talleres gratuitos transformaron mi forma de manejar el negocio. Aprendí más aquí que en cualquier curso pagado.",
    name: "Sofía Martínez",
    role: "Repostera Artesanal",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80",
  },
];

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  const t = testimonios[current];

  return (
    <section id="testimonios" className="bg-[#E7D7B9] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-8 md:mb-16">
          <div>
            <span className="text-[#7D5BA6] text-xs font-bold tracking-[0.28em] uppercase">
              Testimonios
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3B1D4F] leading-tight mt-3">
              Historias de
              <br />
              <span className="text-[#C89B4D]">Impacto</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() =>
                setCurrent(
                  (c) => (c - 1 + testimonios.length) % testimonios.length,
                )
              }
              className="w-12 h-12 rounded-full border border-[#3B1D4F]/20 hover:border-[#3B1D4F]/40 text-[#3B1D4F] flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonios.length)}
              className="w-12 h-12 rounded-full bg-[#3B1D4F] hover:bg-[#7D5BA6] text-[#F8F7F4] flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#3B1D4F] leading-tight mb-6 md:mb-10">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={t.img}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-[#3B1D4F]">{t.name}</p>
                <p className="text-[#3B1D4F]/60 text-sm">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all rounded-full ${
                  i === current
                    ? "h-12 w-1.5 bg-[#3B1D4F]"
                    : "h-3 w-1.5 bg-[#3B1D4F]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
