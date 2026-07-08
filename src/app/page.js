import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Comunidad from "../components/Comunidad";
import Beneficios from "../components/Beneficios";
import Fundacion from "../components/Fundacion";
import Testimonios from "../components/Testimonios";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";

export const metadata = {
  title: "Inicio",
  description:
    "Descubre la comunidad de Mujeres de Impacto Emprenden y accede a recursos, networking y mentorías para crecer tu proyecto.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Comunidad />
      <Beneficios />
      <Fundacion />
      <Testimonios />
      <CTAFinal />
      <Footer />
    </main>
  );
}
