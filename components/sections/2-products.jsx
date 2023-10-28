import { contProd, products } from "@/content/data/constants";
import ProductCard from "../ui/2-ProductCard";

const Products = () => {
  return (
    <section id="popular" className="padding max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {contProd.preSpan}{" "}
          <span className="text-coral-red"> {contProd.span} </span>{" "}
          {contProd.postSpan}
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {contProd.desc}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  sm:gap-6 gap-14">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
