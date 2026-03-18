import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Home Setup",
    quote: "Clean installation and genuine product. Backup is smooth and support is quick.",
    stars: 5
  },
  {
    name: "Pooja Verma",
    location: "Shop Owner",
    quote: "Good guidance on battery replacement. Pricing was fair and service was fast.",
    stars: 5
  },
  {
    name: "Amit Kumar",
    location: "Solar Customer",
    quote: "Solar installation was done properly. They explained on-grid/off-grid clearly.",
    stars: 5
  },
  {
    name: "Neha Singh",
    location: "Vehicle Battery",
    quote: "Vehicle battery fitting was quick. After-sales support is reliable.",
    stars: 4
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Real local reviews"
          subtitle="Professional installation, trusted brands, and support you can count on."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-1 text-energy-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.stars ? "opacity-100" : "opacity-30"}>
                    <Icon name="sun" className="h-4 w-4" />
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold text-energy-ink">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

