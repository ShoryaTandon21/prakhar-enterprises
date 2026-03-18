import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

const points = [
  { title: "10+ Years Experience", text: "Experienced team for safe fitting and dependable performance.", icon: "badge-check" as const },
  { title: "Genuine Branded Products", text: "We recommend trusted brands based on your requirement and budget.", icon: "shield" as const },
  { title: "Affordable Pricing", text: "Clear guidance with fair pricing and no confusing upsell.", icon: "bolt" as const },
  { title: "Quick Service", text: "Fast response for installations and replacements.", icon: "wrench" as const },
  { title: "After-Sales Support", text: "We stay available for service, maintenance and support.", icon: "phone" as const }
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="bg-slate-50 py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by local homes & businesses"
          subtitle="We focus on genuine products, professional fitting, and support that actually picks up the phone."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-energy-blue/10 text-energy-blue">
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <p className="mt-4 text-base font-bold text-energy-ink">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

