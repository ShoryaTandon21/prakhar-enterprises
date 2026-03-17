import { cn } from "@/lib/utils";

type IconName =
  | "bolt"
  | "battery"
  | "sun"
  | "wrench"
  | "shield"
  | "car"
  | "phone"
  | "badge-check"
  | "arrow-right";

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const props = { className: cn("h-6 w-6", className), "aria-hidden": true as const };

  switch (name) {
    case "bolt":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" fill="currentColor" opacity="0.9" />
        </svg>
      );
    case "battery":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M17 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="3" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M7 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sun":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M21 7.5a5.5 5.5 0 0 1-7.2 5.2L8 18.5a2 2 0 1 1-2.8-2.8l5.8-5.8A5.5 5.5 0 0 1 16.5 3l-3 3 3.5 3.5 4-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v7c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "car":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 16h12M7 16l1-6h8l1 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M5 16v3M19 16v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="19" r="1" fill="currentColor" />
          <circle cx="16" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 3h3l1.2 5-2.2 1.5a14 14 0 0 0 5.8 5.8L16 13l5 1.2V17c0 2-1.6 3.6-3.6 3.5A17.9 17.9 0 0 1 3.5 6.6C3.4 4.6 5 3 7 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "badge-check":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 9.2 4.2 5.8 4.8 4.8 8.2 2.6 11 4.8 13.8 5.8 17.2 9.2 17.8 12 20 14.8 17.8 18.2 17.2 19.2 13.8 21.4 11 19.2 8.2 18.2 4.8 14.8 4.2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m8.2 11.3 2.3 2.3 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
          <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="m13 6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

