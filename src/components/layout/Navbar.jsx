import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#FFF3E0]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="/images/Logo.svg" alt="Logo" className="h-30 w-30" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-md font-medium text-[#4B2C20]">
            Home
          </Link>

          <Link to="/menu" className="text-md font-medium text-[#4B2C20]">
            Menu
          </Link>

          <Link to="/about" className="text-md font-medium text-[#4B2C20]">
            About
          </Link>

          <a href="/#contact" className="text-md font-medium text-[#4B2C20]">
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link to="/cart" className="relative text-[#4B2C20]">
            <ShoppingCart size={28} strokeWidth={2} />
            
            {cartCount > 0 && (
            <div className="absolute top-4 left-5 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B4513] text-xs font-bold text-white">
              {cartCount}
            </div>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#4B2C20] md:hidden"
            aria-label="Toggle menu">
            {isOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-[#E8D8C5] bg-[#FFF3E0] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-md font-medium text-[#4B2C20]">
              Home
            </Link>

            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="text-md font-medium text-[#4B2C20]">
              Menu
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-md font-medium text-[#4B2C20]">
              About
            </Link>

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-md font-medium text-[#4B2C20]">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
