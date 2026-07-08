import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mujeresemprendedoras.vercel.app"),
  title: {
    default: "Mujeres de Impacto Emprenden",
    template: "%s | Mujeres de Impacto Emprenden",
  },
  description:
    "Una comunidad vibrante donde emprendedoras crecen, conectan y visibilizan sus proyectos con apoyo real.",
  keywords: [
    "emprendedoras",
    "emprendimiento femenino",
    "comunidad",
    "mentoría",
    "red de apoyo",
    "negocios",
  ],
  authors: [{ name: "Mujeres de Impacto Emprenden" }],
  alternates: {
    canonical: "/",
  },
  manifest: "/favicon_io/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", rel: "icon", sizes: "any" },
      {
        url: "/favicon_io/favicon-16x16.png",
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Mujeres de Impacto Emprenden",
    description:
      "Una comunidad vibrante donde emprendedoras crecen, conectan y visibilizan sus proyectos con apoyo real.",
    url: "https://mujeresemprendedoras.vercel.app/",
    siteName: "Mujeres de Impacto Emprenden",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/favicon_io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Mujeres de Impacto Emprenden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mujeres de Impacto Emprenden",
    description:
      "Una comunidad vibrante donde emprendedoras crecen, conectan y visibilizan sus proyectos con apoyo real.",
    images: ["/favicon_io/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
