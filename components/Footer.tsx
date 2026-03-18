import Container from "@/components/Container";
import Link from "next/link";
import { site } from "@/lib/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-slate-200">
                <Image
                  src="/logo.jpg"
                  alt="Prakhar Enterprises logo"
                  width={72}
                  height={72}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <p className="font-[var(--font-poppins)] text-base font-extrabold text-energy-ink">
                {site.name}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{site.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-energy-ink">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-700 hover:text-energy-ink" href="/products-services">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-700 hover:text-energy-ink" href="/solar-solutions">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link className="text-slate-700 hover:text-energy-ink" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-energy-ink">Contact</p>
            <p className="mt-3 text-sm text-slate-700">
              Akhil Kumar —{" "}
              <a className="text-energy-blue hover:underline" href={`tel:${site.phoneAkhil}`}>
                {site.phoneAkhil}
              </a>
              <br />
              Anuj Tandon —{" "}
              <a className="text-energy-blue hover:underline" href={`tel:${site.phoneAnuj}`}>
                {site.phoneAnuj}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Authorized products • Government-approved solar</p>
        </div>
      </Container>
    </footer>
  );
}
