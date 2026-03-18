import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BrandStrip from "@/components/BrandStrip";
import Testimonials from "@/components/Testimonials";
import Callout from "@/components/Callout";
import { Metadata } from "next";
import { site } from "@/lib/site";
import WhyChoose from "@/components/WhyChoose";
import ProcessSteps from "@/components/ProcessSteps";
import HomeContact from "@/components/HomeContact";

export const metadata: Metadata = {
  title: "Home",
  description: site.seoDescription,
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChoose />
      <BrandStrip />
      <ProcessSteps />
      <Testimonials />
      <Callout />
      <HomeContact />
    </>
  );
}
