import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="/whatsapp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-xl font-black">WA</span>
    </Link>
  );
}
