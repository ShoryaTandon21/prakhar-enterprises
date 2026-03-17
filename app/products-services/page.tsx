import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductSection from "@/components/ProductSection";
import { productSections } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Explore our products and services: inverters, home batteries, vehicle batteries, solar panels, and solar installation.",
  alternates: { canonical: "/products-services" }
};

export default function ProductsServicesPage() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Products & Services"
          title="Complete power solutions under one roof"
          subtitle="From backup power to solar systems, we design the right setup for your requirements with reliable installation and support."
        />

        <div className="mt-12 space-y-10">
          {productSections.map((section) => (
            <ProductSection key={section.id} section={section} />
          ))}
        </div>
      </Container>
    </section>
  );
}

