import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-card">
          <p className="text-xs font-semibold text-energy-blue">404</p>
          <h1 className="mt-3 font-[var(--font-poppins)] text-3xl font-extrabold tracking-tight text-energy-ink">
            Page not found
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Link className="text-sm font-semibold text-slate-700 hover:text-energy-ink" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
