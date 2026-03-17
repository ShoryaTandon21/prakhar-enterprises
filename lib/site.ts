function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export const site = {
  name: "Prakhar Enterprises",
  description:
    "Prakhar Enterprises provides reliable power solutions: inverters, home batteries, vehicle batteries, solar panels (on-grid/off-grid), and professional solar installation & maintenance.",
  url: resolveSiteUrl(),
  phoneAkhil: "9897841086",
  phoneAnuj: "9456078965"
};
