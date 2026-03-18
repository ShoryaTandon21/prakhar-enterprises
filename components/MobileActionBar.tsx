import { site } from "@/lib/site";
import Link from "next/link";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <a
          href={`tel:${site.primaryPhoneE164}`}
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-energy-blue px-4 py-3 text-sm font-semibold text-white shadow-glow"
        >
          Call Now
        </a>
        <Link
          href="/whatsapp"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
