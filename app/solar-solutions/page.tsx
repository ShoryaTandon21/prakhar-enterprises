import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Solar Solutions",
  description:
    "Government-approved solar panels, professional solar installation, and maintenance to help you save costs and build a sustainable future.",
  alternates: { canonical: "/solar-solutions" }
};

export default function SolarSolutionsPage() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Solar Solutions"
          title="Clean energy, long-term savings"
          subtitle="We provide government-approved solar panels, on-grid/off-grid system design, installation, and ongoing maintenance."
        />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-card">
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-24 -top-24 h-52 w-52 rounded-full bg-energy-yellow/40 blur-2xl" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-energy-blue/20 blur-2xl" />
            </div>
            <div className="relative">
              <Image
                src="/images/solar-hero.svg"
                alt="Solar panels and clean energy illustration"
                width={860}
                height={540}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-manrope)] text-xl font-semibold text-energy-ink">
              What you get with our solar service
            </h2>
            <FeatureList
              className="mt-5"
              items={[
                {
                  title: "Government-approved solar panels",
                  description: "Quality panels with verified standards and dependable performance."
                },
                {
                  title: "On-grid & off-grid systems",
                  description: "Right-fit design based on your load, roof space, and usage goals."
                },
                {
                  title: "Professional installation",
                  description: "Safe mounting, wiring, and commissioning by experienced technicians."
                },
                {
                  title: "Maintenance & support",
                  description: "Inspection and service to keep performance high over time."
                }
              ]}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-energy-ink">Benefits</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Lower electricity bills</li>
                  <li>Backup-ready options</li>
                  <li>Reduced carbon footprint</li>
                  <li>Long-term value</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-energy-ink">Ideal for</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Homes & apartments</li>
                  <li>Shops & offices</li>
                  <li>Warehouses</li>
                  <li>Small industries</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#quote" variant="primary">
                Get a Solar Quote
              </Button>
              <Button href="/products-services" variant="ghost">
                View Products & Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

