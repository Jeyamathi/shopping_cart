function ProductCard({ id, title, price, description, image, onAdd, onRemove, isInCart }) {
  const product = { id, title, price, description, image };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={image} alt={title} className="h-40 mx-auto object-contain mb-4" />
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
      <p className="text-green-600 font-semibold text-md">₹ {price}</p>
      <div className="mt-4">
        <button
          className={`w-full ${
            isInCart ? "!bg-red-500 hover:!bg-red-600" : "!bg-green-500 hover:!bg-green-600"
          } text-white py-2 rounded transition`}
          onClick={() => (isInCart ? onRemove(id) : onAdd(product))}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;