import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article className="rounded-2xl bg-[#8B451321] p-3">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl object-cover"
      />

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[#4B2C20]">
            {product.name}
          </h3>

          <p className="mt-1 text-lg font-medium text-[#4B2C20]">
            ${product.price}
          </p>
        </div>

        <Link
          to={`/menu/${product.id}`}
          className="rounded-full bg-[#8B4513] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6a3410]">
          Customize
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
