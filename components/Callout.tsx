import Container from "@/components/Container";
import { site } from "@/lib/site";
import Link from "next/link";

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
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Get Reliable Power Backup Today
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90">
                Call us for quick pricing and availability. For instant quote, WhatsApp your requirement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
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
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
