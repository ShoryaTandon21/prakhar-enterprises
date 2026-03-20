import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Call",
  description: "Call Prakhar Enterprises for quotes, installation and support.",
  alternates: { canonical: "/call" }
};

export default function CallPage() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Call"
          title="Choose who to call"
          subtitle="Tap any number to call directly."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${site.primaryPhoneE164}`}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <p className="text-sm font-semibold text-energy-ink">{site.primaryContact.name}</p>
            <p className="mt-1 text-sm text-slate-700">{site.primaryContact.phone}</p>
            <p className="mt-4 inline-flex items-center justify-center rounded-xl bg-energy-blue px-4 py-2 text-sm font-semibold text-white shadow-glow">
              Call Now
            </p>
          </a>

          <a
            href={`tel:+${site.phoneCountryCode}${site.secondaryContact.phone}`}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <p className="text-sm font-semibold text-energy-ink">{site.secondaryContact.name}</p>
            <p className="mt-1 text-sm text-slate-700">{site.secondaryContact.phone}</p>
            <p className="mt-4 inline-flex items-center justify-center rounded-xl bg-energy-blue px-4 py-2 text-sm font-semibold text-white shadow-glow">
              Call Now
            </p>
          </a>
        </div>
      </Container>
    </section>
  );
}

