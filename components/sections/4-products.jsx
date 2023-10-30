import { contProd, products } from "@/content/data/constants";
import ProductCard from "../ui/4-ProductCard";

const Products = () => {
  return (
    <section id="products" className="container-p pt-16 md:pt-24 text-center">
      <h2 className="text-4xl font-palanquin font-bold">
        {contProd.preSpan}{" "}
        <span className="text-coral-red"> {contProd.span} </span>{" "}
        {contProd.postSpan}
      </h2>
      <p className="mt-2 text-center font-montserrat text-slate-gray">
        {contProd.desc}
      </p>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
