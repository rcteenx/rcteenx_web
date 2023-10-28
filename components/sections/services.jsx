import { services } from "@/content/data/constants";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="padding-x py-10 max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
