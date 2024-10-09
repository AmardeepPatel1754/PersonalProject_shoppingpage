import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 1000; // Set maximum limit for product quantity

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value); // Allow free typing for now
  };

  const handleAddToCart = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      setQuantity(1); // Set minimum value if the input is invalid or too low
      addToCart(product, 1);
    } else if (parsedQuantity > maxQuantity) {
      setQuantity(maxQuantity); // Enforce the maximum quantity
      alert(`You can only add a maximum of ${maxQuantity} items for this product.`);
      addToCart(product, maxQuantity);
    } else {
      addToCart(product, parsedQuantity); // Proceed with valid quantity
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating} ⭐</p>

      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Quantity (Max {maxQuantity})
        </label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          min="1"
          max={maxQuantity}
        />
      </div>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
