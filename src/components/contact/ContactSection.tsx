import { type FormEvent, useState } from "react";
import { buildFormSubmitPayload, CONTACT_EMAIL, FORMSUBMIT_AJAX_URL } from "../../content/contact";
import { siteLinks } from "../../content/site";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorDetail(null);

    try {
      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          buildFormSubmitPayload({
            name,
            replyEmail,
            subject,
            message,
          }),
        ),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || data.success === false) {
        throw new Error(data.message ?? `HTTP ${res.status}`);
      }

      setStatus("success");
      setName("");
      setReplyEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorDetail(err instanceof Error ? err.message : "No se pudo enviar");
    }
  }

  return (
    <section id="contacto" className="stitch-section scroll-mt-24 pb-section md:scroll-mt-28">
      <div className="stitch-section-inner">
        <div className="grid gap-stack-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <header className="max-w-md">
            <p className="stitch-eyebrow">Contacto</p>
            <h2 className="stitch-headline mt-3">Sigamos la conversación</h2>
            <div className="stitch-rule" />
            <p className="mt-stack-md font-body text-[17px] leading-relaxed text-muted">
              Escribe tu mensaje y llegará a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline-offset-2 hover:text-brand hover:underline">
                {CONTACT_EMAIL}
              </a>
              . También puedes escribirme por{" "}
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>{" "}
              o{" "}
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary underline-offset-2 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
            <p className="mt-stack-md font-body text-xs leading-relaxed text-muted/90">
              Los envíos usan tu formulario activado en FormSubmit (clave segura); los correos llegan a{" "}
              <span className="text-muted">{CONTACT_EMAIL}</span> con plantilla «box» más legible.
            </p>
          </header>

          <div className="rounded-card border border-outline-variant/20 bg-surface-container/55 p-6 backdrop-blur-md md:p-8">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-stack-md"
              aria-busy={status === "submitting"}
              noValidate
            >
              <div className="grid gap-stack-md sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-body text-xs font-semibold uppercase tracking-wider text-muted">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-control border border-outline-variant/25 bg-surface-low px-4 py-3 font-body text-sm text-foreground outline-none ring-brand/0 transition placeholder:text-muted/60 focus:border-brand/40 focus:ring-2 focus:ring-brand/25"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-body text-xs font-semibold uppercase tracking-wider text-muted">
                    Tu correo
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={replyEmail}
                    onChange={(e) => setReplyEmail(e.target.value)}
                    className="rounded-control border border-outline-variant/25 bg-surface-low px-4 py-3 font-body text-sm text-foreground outline-none ring-brand/0 transition placeholder:text-muted/60 focus:border-brand/40 focus:ring-2 focus:ring-brand/25"
                    placeholder="para responderte"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="font-body text-xs font-semibold uppercase tracking-wider text-muted">
                  Asunto
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-control border border-outline-variant/25 bg-surface-low px-4 py-3 font-body text-sm text-foreground outline-none ring-brand/0 transition placeholder:text-muted/60 focus:border-brand/40 focus:ring-2 focus:ring-brand/25"
                  placeholder="Ej. Propuesta freelance"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-body text-xs font-semibold uppercase tracking-wider text-muted">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-y rounded-control border border-outline-variant/25 bg-surface-low px-4 py-3 font-body text-sm leading-relaxed text-foreground outline-none ring-brand/0 transition placeholder:text-muted/60 focus:border-brand/40 focus:ring-2 focus:ring-brand/25"
                  placeholder="Cuéntame en qué puedo ayudarte…"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full bg-brand px-8 font-body text-sm font-semibold text-white transition hover:bg-primary-container disabled:pointer-events-none disabled:opacity-60"
                >
                  {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
                </button>
              </div>

              <div role="status" aria-live="polite" className="min-h-5 font-body text-sm">
                {status === "success" ? (
                  <p className="text-secondary">Mensaje enviado. Revisa tu bandeja (y spam) en los próximos minutos.</p>
                ) : null}
                {status === "error" ? (
                  <p className="text-error">
                    No se pudo enviar{errorDetail ? ` (${errorDetail})` : ""}. Prueba{" "}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || "Contacto portafolio")}`} className="underline underline-offset-2">
                      escribir por correo
                    </a>
                    .
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
