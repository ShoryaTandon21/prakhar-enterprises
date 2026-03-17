import Image from "next/image";
import Icon from "@/components/Icon";
import type { ProductSectionData } from "@/lib/products";

export default function ProductSection({ section }: { section: ProductSectionData }) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-7">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-energy-blue/10 blur-2xl" />
            <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-energy-yellow/25 blur-2xl" />
          </div>
          <Image
            src={section.image.src}
            alt={section.image.alt}
            width={920}
            height={640}
            className="relative h-auto w-full"
          />
        </div>

        <div>
          <h2 className="font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-energy-ink">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{section.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-energy-ink">Benefits</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {section.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-energy-yellow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-energy-ink">Features</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {section.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-energy-blue/10 text-energy-blue">
                      <Icon name={f.icon} className="h-4 w-4" />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

