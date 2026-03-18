import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Prakhar Enterprises for quotes, installation, and support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div id="quote" />
        <SectionHeading
          eyebrow="Contact"
          title="Get a quote in minutes"
          subtitle="Tell us what you need and we’ll recommend the right solution for your home or business."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card lg:col-span-2">
            <h2 className="font-[var(--font-poppins)] text-lg font-semibold text-energy-ink">
              Call us
            </h2>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-energy-blue/10 text-energy-blue">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-energy-ink">Phone</p>
                  <p className="mt-1 leading-relaxed">
                    Akhil Kumar —{" "}
                    <a className="text-energy-blue hover:underline" href={`tel:${site.phoneAkhil}`}>
                      {site.phoneAkhil}
                    </a>
                    <br />
                    Anuj Tandon —{" "}
                    <a className="text-energy-blue hover:underline" href={`tel:${site.phoneAnuj}`}>
                      {site.phoneAnuj}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-energy-yellow/25 text-energy-ink">
                  <Icon name="badge-check" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-energy-ink">Highlights</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                    <li>Authorized company products only</li>
                    <li>Government-approved solar panels</li>
                    <li>Reliable installation and customer support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
