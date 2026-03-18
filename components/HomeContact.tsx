import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/links";

export default function HomeContact() {
  const wa = buildWhatsAppLink("Hello, I need inverter/battery/solar details. Please share price and installation info.");
  return (
    <section id="contact" className="py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get a quick quote"
          subtitle="Call us directly or send your requirement on WhatsApp for instant pricing."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-card lg:col-span-2">
            <p className="text-sm font-semibold text-energy-ink">Call</p>
            <p className="mt-2 text-sm text-slate-700">
              {site.primaryContact.name} —{" "}
              <a className="font-semibold text-energy-blue hover:underline" href={`tel:${site.primaryPhoneE164}`}>
                {site.primaryContact.phone}
              </a>
              <br />
              {site.secondaryContact.name} —{" "}
              <a className="font-semibold text-energy-blue hover:underline" href={`tel:+${site.phoneCountryCode}${site.secondaryContact.phone}`}>
                {site.secondaryContact.phone}
              </a>
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={`tel:${site.primaryPhoneE164}`}
                className="inline-flex items-center justify-center rounded-xl bg-energy-blue px-5 py-3 text-sm font-semibold text-white shadow-glow"
              >
                Call Now
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-card"
              >
                WhatsApp Chat
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-energy-ink">Quick note</p>
              <p className="mt-2 text-sm text-slate-700">
                Share your load details (lights/fans/TV/fridge), location, and preferred brand. We’ll recommend the best option.
              </p>
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

