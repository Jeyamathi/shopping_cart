// ProductList.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ cartItems, onAdd, onRemove }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center">🛍️ Welcome to Our Store</h1>
       </div>
      <h2 className="text-xl font-bold mb-4 text-center">🛒 Browse our collection of amazing products!</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              onAdd={onAdd}
              onRemove={onRemove}
              isInCart={isInCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
