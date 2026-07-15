/**
 * CONTATO — CD §11 seção 08 + diretriz Fase 2 item 6
 * Pergunta respondida: "Como iniciar um projeto?"
 *
 * Formulário à esquerda (quem prefere formalidade), canais à direita
 * com WhatsApp em destaque (CTA principal), mapa estilizado + botão
 * "Como chegar" abrindo o Google Maps — sem embed.
 */

import { site, whatsappLink } from "@/config/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { StyledMap } from "@/components/ui/StyledMap";
import { CtaPrimary } from "@/components/ui/Cta";

export function Contact() {
  const { contact, social } = site;

  return (
    <section id="contato" className="bg-white py-20 md:py-28" aria-labelledby="contato-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Seção 08 — Como iniciar um projeto</p>
        <h2 id="contato-title" className="max-w-3xl font-display text-display-md font-bold text-rua-ink">
          Prefere conversar por texto? A gente também. Chama no WhatsApp.
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <ContactForm />

          <div className="flex flex-col gap-10">
            <CtaPrimary href={whatsappLink("contato")} external className="w-fit">
              Chamar no WhatsApp
            </CtaPrimary>

            <dl className="flex flex-col gap-5">
              <div>
                <dt className="wayfinding-label text-rua-ink/60">Telefone</dt>
                <dd className="mt-1 font-sans text-lg text-rua-ink">{contact.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="wayfinding-label text-rua-ink/60">E-mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="font-sans text-lg text-rua-ink hover:text-rua">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="wayfinding-label text-rua-ink/60">Endereço</dt>
                <dd className="mt-1 font-sans text-lg text-rua-ink">
                  {contact.address.street}
                  <br />
                  {contact.address.city}/{contact.address.state} — CEP {contact.address.zip}
                </dd>
              </div>
              <div className="flex gap-6 pt-1">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="wayfinding-label text-rua-ink hover:text-rua">
                  LinkedIn
                </a>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="wayfinding-label text-rua-ink hover:text-rua">
                  Instagram
                </a>
              </div>
            </dl>

            <div>
              <StyledMap className="w-full border-2 border-rua" />
              <a
                href={contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 font-sans font-semibold text-rua"
              >
                Como chegar
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 ease-rua group-hover:translate-x-1">
                  <path d="M3 10h13M11 5l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
