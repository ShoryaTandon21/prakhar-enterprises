import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard, { Service } from "@/components/ServiceCard";

const services: Service[] = [
  {
    title: "Inverter Installation",
    description: "Right-size inverter setup with clean wiring and reliable backup performance.",
    icon: "bolt",
    href: "/products-services#inverters"
  },
  {
    title: "Battery Replacement",
    description: "Genuine branded batteries with quick replacement and proper guidance.",
    icon: "battery",
    href: "/products-services#home-batteries"
  },
  {
    title: "Solar Solutions",
    description: "On-grid/off-grid solar with installation and maintenance for long-term savings.",
    icon: "sun",
    href: "/products-services#solar-panels"
  },
  {
    title: "Vehicle Batteries",
    description: "Car/bike/truck batteries with strong cranking power and support.",
    icon: "car",
    href: "/products-services#vehicle-batteries"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-14 sm:py-18 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Premium service, local support"
          subtitle="From backup power to solar systems, we help you choose the right setup and get it installed quickly."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
