/**
 * FOOTER — Creative Direction §11, seção 09
 * Logo, descrição de 1 linha, canais, direitos autorais, crédito CodeChain.
 * Todos os dados vêm da config central (CD §12).
 */

import { site, whatsappLink } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact, social } = site;

  return (
    <footer className="border-t border-rua-40/60 bg-white" aria-labelledby="footer-title">
      <div className="block-container grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <p id="footer-title" className="font-display text-2xl font-extrabold lowercase text-rua">
            estúdio rua<span className="text-rua-40">*</span>
          </p>
          <p className="mt-3 max-w-xs font-sans text-base text-rua-ink/80">
            Estúdio criativo autoral. Olhar, linguagem e presença para marcas que têm o que dizer.
          </p>
        </div>

        <nav aria-label="Canais de contato" className="flex flex-col gap-3">
          <p className="wayfinding-label text-rua-ink/60">Fale com a gente</p>
          <a href={whatsappLink("contato")} target="_blank" rel="noopener noreferrer" className="w-fit font-sans text-rua-ink transition-colors hover:text-rua">
            WhatsApp — {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className="w-fit font-sans text-rua-ink transition-colors hover:text-rua">
            {contact.email}
          </a>
          <a href={contact.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="w-fit font-sans text-rua-ink transition-colors hover:text-rua">
            {contact.address.street} — {contact.address.city}/{contact.address.state}
          </a>
        </nav>

        <nav aria-label="Redes sociais" className="flex flex-col gap-3">
          <p className="wayfinding-label text-rua-ink/60">Acompanhe</p>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-fit font-sans text-rua-ink transition-colors hover:text-rua">
            LinkedIn
          </a>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-fit font-sans text-rua-ink transition-colors hover:text-rua">
            Instagram
          </a>
        </nav>
      </div>

      <div className="border-t border-rua-40/40">
        <div className="block-container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <p className="wayfinding-label text-rua-ink/60">
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p className="wayfinding-label text-rua-ink/60">
            Desenvolvido por{" "}
            <a href={site.developer.url} target="_blank" rel="noopener noreferrer" className="text-rua hover:underline">
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
