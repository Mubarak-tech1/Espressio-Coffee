import { products } from "../data/products";
import ProductCard from "../components/menu/ProductCard";

const FeaturedProducts = () => {
  const specialCoffee = products.filter(
    (product) =>
      product.category === "hot-coffee" || product.category === "iced-coffee",
  );

  const ourSnacks = products.filter((product) => product.category === "snacks");

  const featuredCoffee = specialCoffee.slice(0, 4);
  const featuredSnacks = ourSnacks.slice(0, 4);

  return (
    <>
      {/* Coffee */}
      <section className="bg-[#FFF3E0] py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#4B2C20]">
            Our Special Coffee
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredCoffee.map((coffee) => (
              <ProductCard key={coffee.id} product={coffee} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/menu"
              className="inline-block rounded-full bg-[#8B4513] px-6 py-3 font-semibold text-white">
              View All Coffee
            </a>
          </div>
        </div>
      </section>

      {/* Snacks */}
      <section className="bg-[#FFF3E0] py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#4B2C20]">
            Our Snacks
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredSnacks.map((snack) => (
              <ProductCard key={snack.id} product={snack} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/menu"
              className="inline-block rounded-full bg-[#8B4513] px-6 py-3 font-semibold text-white">
              View All Snacks
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
