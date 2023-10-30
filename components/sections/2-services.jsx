import { services } from "@/content/data/constants";
import ServiceCard from "../ui/2-ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="container mx-auto container-p pt-16 md:pt-24"
    >
      <h2 className="p-4 text-center text-coral-red text-4xl">
        Dijital Hedef Kriterleri
      </h2>
      <div className="flex justify-center flex-wrap gap-12 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
