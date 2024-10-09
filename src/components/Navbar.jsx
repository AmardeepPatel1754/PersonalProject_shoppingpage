import React from "react";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">E-Commerce</h1>
        <div className="text-white">
          Cart: {cartItems.length} items
        </div>
      </div>
    </nav>
  );
};

export default Navbar;