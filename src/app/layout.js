import "./globals.css";

export const metadata = {
  title: "Mujeres de Impacto Emprenden",
  description: "Una comunidad vibrante donde emprendedoras crecen, conectan y visibilizan sus proyectos con apoyo real.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
