function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export const site = {
  name: "Prakhar Enterprises",
  description:
    "Prakhar Enterprises provides reliable power solutions: inverters, home batteries, vehicle batteries, solar panels (on-grid/off-grid), and professional solar installation & maintenance.",
  seoTitle: "Prakhar Enterprises – Inverter, Battery & Solar Solutions",
  seoDescription:
    "Affordable inverter, battery & solar solutions with installation and support. Contact today.",
  url: resolveSiteUrl(),
  phoneAkhil: "9897841086",
  phoneAnuj: "9456078965",
  primaryContact: { name: "Akhil Kumar", phone: "9897841086" },
  secondaryContact: { name: "Anuj Tandon", phone: "9456078965" },
  phoneCountryCode: "91",
  get primaryPhoneE164() {
    return `+${this.phoneCountryCode}${digitsOnly(this.primaryContact.phone)}`;
  },
  get whatsappDigits() {
    return `${this.phoneCountryCode}${digitsOnly(this.primaryContact.phone)}`;
  },
  get secondaryWhatsappDigits() {
    return `${this.phoneCountryCode}${digitsOnly(this.secondaryContact.phone)}`;
  }
};
