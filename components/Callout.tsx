import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default function Callout() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-energy-blue to-[#0B2F7A] p-8 text-white shadow-glow sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-energy-yellow/40 blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                <Icon name="bolt" className="h-4 w-4 text-energy-yellow" />
                Fast quotes • Trusted brands • Reliable support
              </p>
              <h2 className="mt-4 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                Ready to upgrade your power setup?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90">
                Share your requirements for inverter/battery/solar. We’ll recommend the right solution and
                guide you through installation and maintenance.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="/contact#quote" variant="secondary">
                Get a Quote
              </Button>
              <Button
                href="/products-services"
                variant="ghost"
                className="bg-white/10 text-white ring-white/25 hover:bg-white/15"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

