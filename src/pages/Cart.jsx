import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFF3E0] px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4B2C20]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-[#4B2C20]/70">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-block rounded-full bg-[#8B4513] px-7 py-3 font-semibold text-white transition hover:bg-[#6a3410]">
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF3E0] px-5 py-10 md:px-10 md:py-16 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-6">
          <p className="mt-3 text-[#4B2C20]/70">
            Review your order before checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <article
                key={`${item.id}-${item.size}`}
                className="rounded-2xl bg-[#8B451321] p-4 md:p-5">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-xl object-cover md:h-36 md:w-36"
                  />

                  {/* Product Details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#4B2C20]">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-[#4B2C20]/70">
                        Size: {item.size}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-full border border-[#8B451340]">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, "decrease")
                          }
                          className="px-4 py-2 text-[#4B2C20] transition hover:bg-[#8B451321]">
                          −
                        </button>

                        <span className="min-w-10 text-center text-sm font-semibold text-[#4B2C20]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, "increase")
                          }
                          className="px-4 py-2 text-[#4B2C20] transition hover:bg-[#8B451321]">
                          +
                        </button>
                      </div>

                      {/* Item Total */}
                      <p className="font-bold text-[#4B2C20]">
                        ${item.unitPrice * item.quantity}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="mt-3 w-fit text-sm font-medium text-[#8B4513] underline underline-offset-4">
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-3xl bg-[#4B2C20] p-6 text-[#FFF3E0] lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="mt-6 flex justify-between border-b border-[#FFF3E033] pb-4">
              <span className="text-[#FFF3E0B2]">Items</span>

              <span>
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-[#FFF3E0B2]">Subtotal</span>

              <span className="font-semibold">${totalPrice}</span>
            </div>

            <div className="mt-6 flex justify-between border-t border-[#FFF3E033] pt-5 text-xl font-bold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <button className="mt-7 w-full rounded-full bg-[#FFF3E0] px-6 py-4 font-bold text-[#4B2C20] transition hover:bg-white">
              Checkout
            </button>

            <Link
              to="/menu"
              className="mt-4 block text-center text-sm font-semibold text-[#FFF3E0B2] hover:text-[#FFF3E0]">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
