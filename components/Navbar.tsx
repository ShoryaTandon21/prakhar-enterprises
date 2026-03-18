"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

const homeSections = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#brands", label: "Brands" },
  { href: "/#process", label: "Process" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" }
];

const pages = [
  { href: "/", label: "Home" },
  { href: "/products-services", label: "Products & Services" },
  { href: "/solar-solutions", label: "Solar Solutions" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    if (pathname === "/") return homeSections;
    return pages;
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          <span className="font-[var(--font-poppins)] text-sm font-extrabold tracking-tight text-energy-ink sm:text-base">
            Prakhar Enterprises
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {items.map((item) => (
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <span className="text-lg font-bold">×</span> : <span className="text-lg font-bold">≡</span>}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <div className="grid gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-energy-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              <Button href="/contact#quote" variant="primary">
                Get a Quote
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-energy-ink ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <Icon name="phone" className="h-4 w-4 text-energy-blue" />
                Call & WhatsApp
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
