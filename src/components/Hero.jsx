"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { target: 500, label: "emprendedoras", prefix: "+" },
  { target: 50, label: "talleres", prefix: "+" },
  { target: 200, label: "proyectos", prefix: "+" },
];

function AnimatedNumber({ target, prefix }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(target * eased);
      setValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span>{`${prefix}${value}`}</span>;
}

export default function Hero() {
  return (
    <section className="relative bg-[#E7D7B9] overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 flex flex-col justify-center gap-0 -rotate-12 scale-150 opacity-[0.06] select-none pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="text-[#3B1D4F] text-[120px] font-black whitespace-nowrap leading-none tracking-tighter"
          >
            MUJERES&nbsp;&nbsp;MUJERES&nbsp;&nbsp;MUJERES&nbsp;&nbsp;MUJERES
          </div>
        ))}
      </div>

      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#B89ACD] opacity-30 blur-[120px]" />
      <div className="absolute bottom-[-50px] left-[20%] w-[400px] h-[400px] rounded-full bg-[#C89B4D] opacity-20 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#3B1D4F]/10 border border-[#3B1D4F]/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#C89B4D] animate-pulse" />
            <span className="text-[#3B1D4F] text-xs font-bold tracking-[0.28em] uppercase">
              Comunidad activa
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-[#3B1D4F] leading-[0.95] tracking-[0.12em] mb-6">
            IMPULSA
            <span className="text-[#C89B4D]">MOS</span>
            <br />
            <span className="text-[#7D5BA6]">MUJERES</span>
          </h1>

          <p className="font-body text-[#3B1D4F]/75 text-lg leading-relaxed mb-10 max-w-sm">
            que transforman sus sueños en negocios reales. Una comunidad que
            vibra contigo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#3B1D4F] hover:bg-[#7D5BA6] text-[#F8F7F4] font-black text-sm uppercase tracking-[0.22em] px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Quiero Formar Parte
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#comunidad"
              className="inline-flex items-center gap-2 border border-[#3B1D4F]/20 hover:border-[#3B1D4F]/40 text-[#3B1D4F]/80 hover:text-[#3B1D4F] text-sm font-semibold px-8 py-4 rounded-full transition-all"
            >
              Conocer más
            </a>
          </div>

          <div className="flex gap-8 mt-14 pt-8 border-t border-[#3B1D4F]/10">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-[#3B1D4F]">
                  <AnimatedNumber target={s.target} prefix={s.prefix} />
                </p>
                <p className="text-[#3B1D4F]/55 text-xs uppercase tracking-[0.2em] mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 border border-[#C89B4D]/40 rounded-3xl" />
          <div className="absolute -inset-8 border border-[#7D5BA6]/20 rounded-[2.5rem]" />

          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <Image
              src="/mujeres.jpg"
              alt="Emprendedoras"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={80}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B1D4F]/80 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-6 bottom-16 bg-[#C89B4D] text-[#3B1D4F] rounded-2xl p-4 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Nuevo taller
            </p>
            <p className="text-sm font-black mt-0.5">Branding Personal</p>
          </div>

          <div className="absolute -right-4 top-12 w-8 h-8 rounded-full bg-[#7D5BA6]" />
          <div className="absolute right-8 -top-4 w-4 h-4 rounded-full border-2 border-[#C89B4D]" />
        </div>
      </div>
    </section>
  );
}
