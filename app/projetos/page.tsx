import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsIndex } from "@/components/sections/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Histórias de marcas traduzidas pelo Estúdio Rua: segmentos diferentes, linguagens diferentes, o mesmo olhar.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <ProjectsIndex />
      </main>
      <Footer />
    </>
  );
}
