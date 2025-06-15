import { useState } from "react";
import ProductList from "./ProductList";
import CartSidebar from "./CartSidebar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <ProductList
          cartItems={cartItems}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-4 right-4 !bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-40"
        >
          {showCart ? "Close Cart" : `Cart (${cartItems.length})`}
        </button>
      </div>

      {showCart && (
        <CartSidebar
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default App;
