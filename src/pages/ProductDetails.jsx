import { useState } from "react";
import { useParams,Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../components/context/CartContext";


const ProductDetails = () => {
  const { id } = useParams();

  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <main>
        <h1>Product not found</h1>
      </main>
    );
  }

  const sizePrices = {
    Small: 0,
    Medium: 1,
    Large: 2,
  };

  const unitPrice = product.price + sizePrices[size];
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      size,
      quantity,
      unitPrice,
    };
   
    addToCart(cartItem);
  };
  return (
  <main className="min-h-screen bg-[#FFF3E0] px-5 py-10 md:px-10 md:py-16 lg:px-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">

      {/* Product Image */}
      <div className="overflow-hidden rounded-3xl bg-[#8B451321] p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full max-h-[550px] w-full rounded-2xl object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col gap-7">

        {/* Name + Price */}
        <div>
          <h1 className="text-3xl font-bold text-[#4B2C20] md:text-3xl">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-[#8B4513]">
            ${unitPrice}
          </p>
        </div>

        {/* Size */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[#4B2C20]">
            Choose your size
          </h2>

          <div className="flex gap-3">
            {["Small", "Medium", "Large"].map((option) => (
              <button
                key={option}
                onClick={() => setSize(option)}
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                  size === option
                    ? "border-[#8B4513] bg-[#8B4513] text-white"
                    : "border-[#8B451340] bg-transparent text-[#4B2C20] hover:bg-[#8B451321]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[#4B2C20]">
            Quantity
          </h2>

          <div className="flex w-fit items-center overflow-hidden rounded-full border border-[#8B451340]">
            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
              className="px-5 py-3 text-lg text-[#4B2C20] hover:bg-[#8B451321]"
            >
              −
            </button>

            <span className="min-w-12 text-center font-semibold text-[#4B2C20]">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-5 py-3 text-lg text-[#4B2C20] hover:bg-[#8B451321]"
            >
              +
            </button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="rounded-2xl bg-[#8B451321] p-5">
          <div className="flex justify-between text-[#4B2C20]">
            <span>Price per item</span>
            <span className="font-semibold">${unitPrice}</span>
          </div>

          <div className="mt-3 flex justify-between border-t border-[#8B451340] pt-3 text-lg font-bold text-[#4B2C20]">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full rounded-full bg-[#8B4513] px-6 py-4 font-bold text-white transition hover:bg-[#6a3410]"
        >
          Add to Cart
        </button>

        {/* Cart Link */}
        <Link
          to="/cart"
          className="text-center text-sm font-semibold text-[#8B4513] underline underline-offset-4"
        >
          View Cart
        </Link>

      </div>
    </div>
  </main>
);
};

export default ProductDetails;
