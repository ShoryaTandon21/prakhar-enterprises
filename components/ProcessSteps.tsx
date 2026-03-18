import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { n: "01", title: "Contact Us", text: "Call or WhatsApp your requirement and location." },
  { n: "02", title: "Free Consultation", text: "We suggest the right inverter/battery/solar setup." },
  { n: "03", title: "Installation", text: "Quick, clean fitting with safety-first wiring." },
  { n: "04", title: "Support", text: "After-sales help, maintenance guidance and service." }
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="Simple, fast and transparent"
          subtitle="A smooth process from first call to installation and long-term support."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
              <p className="text-xs font-extrabold text-energy-blue">{s.n}</p>
              <p className="mt-3 text-base font-bold text-energy-ink">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

