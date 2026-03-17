import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-energy-blue text-white shadow-glow hover:shadow-card hover:bg-[#0A4CC0] focus-visible:outline-energy-blue",
  secondary:
    "bg-energy-yellow text-energy-ink hover:bg-[#FFDB2D] focus-visible:outline-energy-yellow",
  ghost:
    "bg-white text-energy-ink ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-slate-400"
};

export default function Button({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

