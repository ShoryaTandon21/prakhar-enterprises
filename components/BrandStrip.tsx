import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

const brands = [
  { name: "Tata Power Solar", accent: "bg-energy-blue/10 text-energy-blue" },
  { name: "Adani Solar", accent: "bg-energy-yellow/25 text-energy-ink" },
  { name: "Exide", accent: "bg-slate-100 text-energy-ink" },
  { name: "Luminous", accent: "bg-energy-blue/10 text-energy-blue" },
  { name: "Other reputed brands", accent: "bg-slate-100 text-energy-ink" }
];

export default function BrandStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Trusted Brands"
          title="Only authorized company products"
          subtitle="We source from trusted, reputed brands and use government-approved solar panels for long-term performance."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className={`flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold shadow-card transition-transform duration-200 hover:-translate-y-0.5 ${b.accent}`}
              title={b.name}
            >
              <Icon name="badge-check" className="h-4 w-4" />
              <span className="text-center">{b.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

