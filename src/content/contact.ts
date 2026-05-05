/** Correo donde recibes los mensajes del portafolio (FormSubmit reenvía aquí). */
export const CONTACT_EMAIL = "jhonatan2747@gmail.com" as const;

/** Endpoint AJAX de FormSubmit — no expone contraseñas; la primera vez debes confirmar el correo en FormSubmit. */
export function getFormSubmitAjaxUrl(email: string): string {
  return `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
}
