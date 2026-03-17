import Container from "@/components/Container";
import Button from "@/components/Button";
import Image from "next/image";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-energy-blue/10 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-energy-yellow/25 blur-3xl" />
      </div>

      <Container className="relative py-14 sm:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="motion-safe:animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-energy-yellow/25 px-3 py-1 text-xs font-semibold text-energy-ink">
              <Icon name="badge-check" className="h-4 w-4" />
              Authorized products • Government-approved solar panels
            </p>

            <h1 className="mt-5 font-[var(--font-manrope)] text-4xl font-extrabold tracking-tight text-energy-ink sm:text-5xl">
              Reliable Power Solutions for Homes & Businesses
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700">
              Prakhar Enterprises delivers inverters, batteries, vehicle batteries, and solar solutions
              (on-grid/off-grid) with professional installation, maintenance, and customer support.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#quote" variant="primary">
                Get a Quote
              </Button>
              <Button href="/products-services" variant="ghost">
                Explore Services
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { k: "Authorized", v: "Genuine products" },
                { k: "Solar", v: "On/Off grid" },
                { k: "Support", v: "Reliable service" }
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold text-energy-blue">{item.k}</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-energy-blue/10 via-white to-energy-yellow/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="bg-gradient-to-r from-energy-blue/10 via-white to-energy-yellow/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-slate-200">
                      <Image
                        src="/logo.jpg"
                        alt="Prakhar Enterprises logo"
                        width={48}
                        height={48}
                        className="h-6 w-6 object-contain"
                      />
                    </span>
                    <p className="text-xs font-semibold text-slate-700">Prakhar Enterprises</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-energy-blue">
                    <span className="h-2 w-2 rounded-full bg-energy-yellow" />
                    Energy-ready
                  </span>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/images/hero-solar.svg"
                  alt="Solar and power solutions illustration"
                  width={920}
                  height={680}
                  className="h-auto w-full motion-safe:animate-float"
                  priority
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-700">Brands</p>
                    <p className="mt-1 text-sm text-slate-700">
                      Adani Solar • Tata Power Solar • Luminous
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-700">Services</p>
                    <p className="mt-1 text-sm text-slate-700">
                      Solar installation • Maintenance • Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
