import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const brands = ["Exide", "Amaron", "Luminous", "Microtek"];

export default function BrandStrip() {
  return (
    <section id="brands" className="border-y border-slate-200 bg-white py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Brands"
          title="Trusted brands, genuine products"
          subtitle="We deal in reputed brands and recommend the right model based on your load and usage."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-base font-extrabold tracking-tight text-energy-ink shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-energy-blue/8 via-white to-energy-yellow/20 p-8 shadow-card sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-energy-ink">Contact for Best Price</p>
            <p className="mt-1 text-sm text-slate-700">
              Share your requirement and we’ll send the best available option quickly.
            </p>
          </div>
          <Button href="/contact#quote" variant="primary">
            Contact for Best Price
          </Button>
        </div>
      </Container>
    </section>
  );
}
