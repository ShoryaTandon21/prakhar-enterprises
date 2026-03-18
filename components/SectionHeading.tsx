import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full bg-energy-blue/10 px-3 py-1 text-xs font-semibold text-energy-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-energy-yellow" />
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 font-[var(--font-poppins)] text-3xl font-extrabold tracking-tight text-energy-ink sm:text-4xl">
        {title}
      </h1>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-700">{subtitle}</p> : null}
    </div>
  );
}
