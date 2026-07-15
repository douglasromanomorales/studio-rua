"use client";

/**
 * FORMULÁRIO DE CONTATO — CD §11 seção 08
 * Nome, Empresa, Email, Telefone, Mensagem. Validação inline.
 * Estado de envio usa o pombo em passo de caminhada (estado Carrega, CD §4.1).
 *
 * ⚠️ [PENDENTE] Endpoint de envio: este formulário está pronto para ser
 * conectado a um serviço (Resend, Formspree, rota própria em /api/contato
 * etc.). Por ora, valida e simula o envio — plugar o backend é o próximo passo.
 */

import { useState, type ChangeEvent, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

interface FormState {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const EMPTY: FormState = { nome: "", empresa: "", email: "", telefone: "", mensagem: "" };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) next.nome = "Conta pra gente o seu nome.";
    if (!form.email.trim()) next.email = "Precisamos do seu e-mail para responder.";
    else if (!isValidEmail(form.email)) next.email = "Esse e-mail não parece válido.";
    if (!form.mensagem.trim()) next.mensagem = "Escreva uma mensagem, mesmo que curta.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      // [PENDENTE] substituir por chamada real ao endpoint de contato
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-rua bg-rua-mist p-8" role="status">
        <p className="font-display text-2xl font-bold text-rua">Mensagem no caminho.</p>
        <p className="mt-2 font-sans text-rua-ink/80">
          Recebemos a sua mensagem e respondemos em breve. Se preferir algo mais rápido, chama a gente no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6" aria-label="Formulário de contato">
      <Field id="nome" label="Nome" value={form.nome} onChange={(v) => update("nome", v)} error={errors.nome} required />
      <Field id="empresa" label="Empresa" value={form.empresa} onChange={(v) => update("empresa", v)} />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="E-mail" type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} required />
        <Field id="telefone" label="Telefone" type="tel" value={form.telefone} onChange={(v) => update("telefone", v)} />
      </div>
      <Field
        id="mensagem"
        label="Mensagem"
        as="textarea"
        value={form.mensagem}
        onChange={(v) => update("mensagem", v)}
        error={errors.mensagem}
        required
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-rua px-7 py-3.5 font-sans text-base font-semibold text-white transition-colors duration-200 ease-rua hover:bg-rua-ink disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>

      {status === "error" && (
        <p role="alert" className="font-sans text-sm text-rua">
          Algo não saiu como esperado. Tenta de novo ou chama no WhatsApp.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
  required?: boolean;
}

function Field({ id, label, value, onChange, type = "text", as = "input", error, required }: FieldProps) {
  const shared = {
    id,
    name: id,
    value,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className: `w-full border-b-2 bg-transparent py-2.5 font-sans text-base text-rua-ink outline-none transition-colors duration-200 ease-rua placeholder:text-rua-ink/40 ${
      error ? "border-rua" : "border-rua-40 focus:border-rua"
    }`,
  };

  return (
    <div>
      <label htmlFor={id} className="wayfinding-label mb-2 block text-rua-ink/60">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea {...shared} rows={4} />
      ) : (
        <input {...shared} type={type} />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 font-sans text-sm text-rua">
          {error}
        </p>
      )}
    </div>
  );
}
