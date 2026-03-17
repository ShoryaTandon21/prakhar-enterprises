import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Homeowner",
    quote:
      "Installation was clean and professional. The backup setup works smoothly and the team guided us clearly."
  },
  {
    name: "Shop Owner",
    quote:
      "Good product suggestions and reliable support. Power backup keeps billing and lights running during outages."
  },
  {
    name: "Solar Customer",
    quote:
      "Great experience with solar installation. They explained on-grid/off-grid options and handled everything end-to-end."
  }
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Customers choose us for reliability"
          subtitle="Professional installation, trusted brands, and support you can count on."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              <blockquote className="text-sm leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-energy-ink">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

