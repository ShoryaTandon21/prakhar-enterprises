import Container from "@/components/Container";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/solar-rooftop.jpg"
          alt="Solar panels background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07122A]/90 via-[#07122A]/70 to-[#07122A]/30" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="motion-safe:animate-fade-up">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                <Icon name="badge-check" className="h-4 w-4 text-energy-yellow" />
                Genuine branded products
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                <Icon name="sun" className="h-4 w-4 text-energy-yellow" />
                Government-approved solar
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Power Backup Solutions You Can Trust
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
              Expert inverter, battery & solar installation with reliable support. Quick site visit, clean
              fitting, and honest guidance.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.primaryPhoneE164}`}
                className="inline-flex items-center justify-center rounded-xl bg-energy-yellow px-6 py-3 text-sm font-semibold text-energy-ink shadow-card transition hover:-translate-y-0.5"
              >
                Call Now
              </a>
              <Link
                href="/whatsapp"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5"
              >
                Get Instant Price on WhatsApp
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "10+ Years", v: "Experience" },
                { k: "500+ Happy", v: "Customers" },
                { k: "Fast", v: "Installation" }
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur"
                >
                  <p className="text-sm font-extrabold">{item.k}</p>
                  <p className="mt-1 text-xs text-white/85">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-energy-yellow/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-card backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-white/20">
                    <Image
                      src="/logo.jpg"
                      alt="Prakhar Enterprises logo"
                      width={56}
                      height={56}
                      className="h-7 w-7 object-contain"
                    />
                  </span>
                  <p className="text-sm font-semibold text-white">Prakhar Enterprises</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                  <span className="h-2 w-2 rounded-full bg-energy-yellow" />
                  Energy-ready
                </span>
              </div>
              <div className="p-6">
                <Image
                  src="/images/hero-solar.svg"
                  alt="Solar and power solutions illustration"
                  width={920}
                  height={680}
                  className="h-auto w-full"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 text-white ring-1 ring-white/10">
                    <p className="text-xs font-semibold text-white/80">Brands</p>
                    <p className="mt-1 text-sm text-white/90">Adani • Tata Power Solar • Luminous • Microtek</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-white ring-1 ring-white/10">
                    <p className="text-xs font-semibold text-white/80">Support</p>
                    <p className="mt-1 text-sm text-white/90">Installation • Maintenance • After-sales</p>
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
