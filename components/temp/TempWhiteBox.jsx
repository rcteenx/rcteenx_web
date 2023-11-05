import ServiceCard from "@/components/ui/WhiteBox";

const TempWhiteBox = ({ sectionId, title, boxes }) => {
  return (
    <section id={sectionId} className="container mx-auto container-p">
      <h2 className="p-4 text-center text-coral-red text-4xl lg:text-6xl">
        {title}
      </h2>
      <div className="flex justify-center flex-wrap gap-12 md:gap-8">
        {boxes.map((box) => (
          <ServiceCard key={box.label} {...box} />
        ))}
      </div>
    </section>
  );
};

export default TempWhiteBox;
