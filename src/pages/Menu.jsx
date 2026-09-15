import { useState } from "react";

import { products } from "../data/products";
import CategoryFilter from "../components/menu/CategoryFilter";
import ProductGrid from "../components/menu/ProductGrid";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "hot-coffee", name: "Hot Coffee" },
    { id: "iced-coffee", name: "Iced Coffee" },
    { id: "snacks", name: "Snacks" },
  ];


  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FFF3E0] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">

          <h1 className=" text-4xl font-bold text-[#4B2C20] md:text-5xl">
            Our Menu
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#4B2C20]/70">
            Discover carefully crafted coffee and delicious treats made for
            every kind of coffee moment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products */}
        <div className="mt-12">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  );
};

export default Menu;
