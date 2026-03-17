import Container from "@/components/Container";

export default function Loading() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-40 rounded bg-slate-200" />
          <div className="h-10 w-3/4 rounded bg-slate-200" />
          <div className="h-24 w-full rounded-3xl bg-slate-100" />
        </div>
      </Container>
    </section>
  );
}

