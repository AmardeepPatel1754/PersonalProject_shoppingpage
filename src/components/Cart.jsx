import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-4">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
