import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseNarrative } from "@/components/sections/CaseNarrative";
import { getProject, projects } from "@/content/projects";

/**
 * Next.js 15: `params` é uma Promise em page.tsx, generateMetadata e
 * layout.tsx (mudança oficial da versão 15 — antes era um objeto síncrono).
 * https://nextjs.org/docs/app/building-your-application/upgrading/version-15
 */
interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.cliente,
    description: project.sintese,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.cliente} — Estúdio Rua`,
      description: project.sintese,
    },
  };
}

export default async function ProjetoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <CaseNarrative project={project} />
      </main>
      <Footer />
    </>
  );
}
