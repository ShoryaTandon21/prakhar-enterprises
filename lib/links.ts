import { site } from "@/lib/site";

export function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappDigits}?text=${text}`;
}

