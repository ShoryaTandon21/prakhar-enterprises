import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { buildWhatsAppLinkTo } from "@/lib/links";

export const metadata: Metadata = {
  title: "WhatsApp",
  description: "Chat on WhatsApp with Prakhar Enterprises for instant price and installation details.",
  alternates: { canonical: "/whatsapp" }
};

export default function WhatsAppPage() {
  const message =
    "Hello, I need inverter/battery/solar details. Please share price and installation information.";

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="WhatsApp"
          title="Get instant price on WhatsApp"
          subtitle="Your WhatsApp will open with a pre-filled message (you can edit it). For fastest response, message both contacts."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={buildWhatsAppLinkTo(site.whatsappDigits, message)}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <p className="text-sm font-semibold text-energy-ink">WhatsApp {site.primaryContact.name}</p>
            <p className="mt-1 text-sm text-slate-700">{site.primaryContact.phone}</p>
            <p className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white">
              Open WhatsApp
            </p>
          </a>

          <a
            href={buildWhatsAppLinkTo(site.secondaryWhatsappDigits, message)}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <p className="text-sm font-semibold text-energy-ink">WhatsApp {site.secondaryContact.name}</p>
            <p className="mt-1 text-sm text-slate-700">{site.secondaryContact.phone}</p>
            <p className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white">
              Open WhatsApp
            </p>
          </a>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <p className="text-sm font-semibold text-energy-ink">Tip</p>
          <p className="mt-2 text-sm text-slate-700">
            To send the same message to both numbers: open WhatsApp for Akhil → send → then open WhatsApp for
            Anuj → send.
          </p>
        </div>
      </Container>
    </section>
  );
}

