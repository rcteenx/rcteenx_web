import { digitalPresenceAreas } from "@/content/data";
import ServiceCard from "../ui/2-ServiceCard";

const Services = () => {
  return (
    <section id="services" className="container mx-auto container-p">
      <h2 className="p-4 text-center text-coral-red text-4xl lg:text-6xl">
        1 Dijital Varlıklar Alanları
      </h2>
      <div className="flex justify-center flex-wrap gap-12 md:gap-8">
        {digitalPresenceAreas.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
