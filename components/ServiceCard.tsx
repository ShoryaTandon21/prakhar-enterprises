import Link from "next/link";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

export type Service = {
  title: string;
  description: string;
  icon: "bolt" | "battery" | "car" | "sun";
  href: string;
};

export default function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={service.href}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy-blue",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-energy-blue/10 blur-2xl" />
        <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-energy-yellow/25 blur-2xl" />
      </div>

      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-energy-blue/10 text-energy-blue">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-[var(--font-manrope)] text-lg font-semibold text-energy-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-energy-blue">
          Learn more{" "}
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </Link>
  );
}

