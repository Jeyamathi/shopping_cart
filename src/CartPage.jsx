function CartPage({ items, onAdd, onRemove, updateQuantity }) {
  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = getTotal();
  const discount = subtotal * 0.1;
  const finalTotal = subtotal - discount;

  if (items.length === 0) {
    return <p className="text-center mt-8 text-gray-600">🛒 Your cart is empty</p>;
  }

  return (
    <div className="mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">🧾 Cart Summary</h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">₹ {item.price.toFixed(2)} x {item.quantity}</p>
                <p className="text-gray-800 font-medium">Total: ₹ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center mt-2 md:mt-0 space-x-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-gray-300 px-2 rounded hover:bg-gray-400"
              >
                −
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-gray-300 px-2 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="ml-4 text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-gray-700">Subtotal: ₹ {subtotal.toFixed(2)}</p>
        <p className="text-gray-700">Discount (10%): − ₹ {discount.toFixed(2)}</p>
        <p className="text-lg font-bold">Total: ₹ {finalTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartPage;
