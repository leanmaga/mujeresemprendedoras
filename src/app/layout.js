import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mujeres de Impacto Emprenden",
  description:
    "Una comunidad vibrante donde emprendedoras crecen, conectan y visibilizan sus proyectos con apoyo real.",
  icons: {
    icon: [{ url: "/logopng.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
