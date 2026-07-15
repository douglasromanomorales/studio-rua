import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { HowWeSee } from "@/components/sections/HowWeSee";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Invitation } from "@/components/sections/Invitation";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";

/**
 * HOME — arquitetura completa na Creative Direction §11 + Adendo v1.1.
 * Fase 1: 01 Hero (Painel de Embarque) · 02 Manifesto · 09 Footer.
 * Fase 2: 03 Serviços (Painel de Linhas) · 04 Como Olhamos · 05 Processo (Linha do Trajeto).
 * Fase 3: 06 Projetos (Prova de Tradução) · 07 Convite · 08 Contato · /projetos · /projetos/[slug] · 404.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <HowWeSee />
        <Process />
        <Projects />
        <Invitation />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
