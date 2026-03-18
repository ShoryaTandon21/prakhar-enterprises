import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prakhar Enterprises — our mission, vision, and commitment to authorized products, reliable installation, and customer support.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="About Prakhar Enterprises"
          title="Power solutions you can trust"
          subtitle="We help homes and businesses stay powered with authorized products, government-approved solar solutions, and dependable service."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card lg:col-span-2">
            <h2 className="font-[var(--font-poppins)] text-xl font-semibold text-energy-ink">
              Who we are
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Prakhar Enterprises is a power solutions business specializing in inverters, home batteries,
              vehicle batteries, and end-to-end solar solutions (on-grid/off-grid). We focus on safe,
              reliable installations and responsive customer support.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-[var(--font-poppins)] font-semibold text-energy-ink">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Deliver dependable power systems with transparent guidance, authorized products, and
                  professional installation.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-[var(--font-poppins)] font-semibold text-energy-ink">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Enable energy independence through modern solar adoption and long-lasting backup power
                  for every customer.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-card">
            <h2 className="font-[var(--font-poppins)] text-xl font-semibold text-energy-ink">
              Why choose us
            </h2>
            <FeatureList
              className="mt-5"
              items={[
                {
                  title: "Authorized products only",
                  description: "We use only genuine, authorized company products for quality and safety."
                },
                {
                  title: "Government-approved solar panels",
                  description: "Solar solutions aligned with approved standards and best practices."
                },
                {
                  title: "Reputed brands",
                  description: "Adani Solar, Tata Power Solar, Exide, Luminous, Okaya, and other trusted brands."
                },
                {
                  title: "Reliable installation & support",
                  description: "Professional installation, guidance, and after-sales assistance."
                }
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
