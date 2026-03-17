import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products-services", label: "Products & Services" },
  { href: "/solar-solutions", label: "Solar Solutions" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-slate-200">
            <Image
              src="/logo.jpg"
              alt="Prakhar Enterprises logo"
              width={72}
              height={72}
              className="h-9 w-9 object-contain"
              priority
            />
          </span>
          <span className="font-[var(--font-manrope)] text-sm font-extrabold tracking-tight text-energy-ink sm:text-base">
            Prakhar Enterprises
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-energy-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact#quote" variant="primary" className="hidden sm:inline-flex">
            Get a Quote
          </Button>
          <Button href="/contact#quote" variant="ghost" className="sm:hidden">
            Quote
          </Button>
        </div>
      </Container>

      <div className="border-t border-slate-200 bg-white md:hidden">
        <Container className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-energy-ink"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
