import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];

      return updatedCart;
    });
  };

const removeFromCart = (itemId, itemSize) => {
  setCart((prevCart) =>
    prevCart.filter((item) => !(item.id === itemId && item.size === itemSize)),
  );
};

const updateQuantity = (itemId, itemSize, action) => {
  setCart((prevCart) =>
    prevCart.map((item) => {
      if (item.id === itemId && item.size === itemSize) {
        const newQuantity = action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
