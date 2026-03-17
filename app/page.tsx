import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BrandStrip from "@/components/BrandStrip";
import Testimonials from "@/components/Testimonials";
import Callout from "@/components/Callout";
import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BrandStrip />
      <Testimonials />
      <Callout />
    </>
  );
}

