import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

export default function FeatureList({
  items,
  className
}: {
  items: Array<{ title: string; description: string }>;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-energy-blue/10 text-energy-blue">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-energy-ink">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

