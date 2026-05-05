/** Correo donde FormSubmit te reenvía los mensajes (no lo pongas en la URL del fetch). */
export const CONTACT_EMAIL = "jhonatan2747@gmail.com" as const;

/**
 * Clave del formulario tras «Activate Form» en FormSubmit.
 * Reemplaza la dirección “desnuda” en la URL AJAX.
 */
export const FORMSUBMIT_FORM_KEY = "dc54fca44edafe4d2a44185d3e780939" as const;

export const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_FORM_KEY}` as const;

export type ContactFormValues = {
  name: string;
  replyEmail: string;
  subject: string;
  message: string;
};

/** Cuerpo JSON para FormSubmit: plantilla `box`, Reply-To del visitante. */
export function buildFormSubmitPayload(values: ContactFormValues): Record<string, string | boolean> {
  const subjectLine = values.subject.trim() || "Nuevo mensaje desde el portafolio";
  const trimmedName = values.name.trim();
  const trimmedEmail = values.replyEmail.trim();
  const trimmedMessage = values.message.trim();

  return {
    name: trimmedName,
    email: trimmedEmail,
    _replyto: trimmedEmail,
    subject: subjectLine,
    message: trimmedMessage,
    _subject: `[Portafolio] ${subjectLine}`,
    _template: "box",
    _captcha: false,
    _gotcha: "",
  };
}
