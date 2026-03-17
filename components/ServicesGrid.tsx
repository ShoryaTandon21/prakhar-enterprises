import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard, { Service } from "@/components/ServiceCard";

const services: Service[] = [
  {
    title: "Inverters",
    description: "Efficient inverter solutions for stable power backup and smooth performance.",
    icon: "bolt",
    href: "/products-services#inverters"
  },
  {
    title: "Batteries",
    description: "Reliable home batteries and trusted brands for longer backup and durability.",
    icon: "battery",
    href: "/products-services#home-batteries"
  },
  {
    title: "Vehicle Batteries",
    description: "Battery options for cars, bikes, trucks and more — strong starting and support.",
    icon: "car",
    href: "/products-services#vehicle-batteries"
  },
  {
    title: "Solar Panels",
    description: "Government-approved solar panels for on-grid/off-grid systems and cost savings.",
    icon: "sun",
    href: "/products-services#solar-panels"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need for dependable power"
          subtitle="Choose from our core offerings — designed, installed, and supported by professionals."
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

