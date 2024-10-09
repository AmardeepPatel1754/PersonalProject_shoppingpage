import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const maxQuantity = 1000; // Set the maximum quantity limit

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity > maxQuantity) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: maxQuantity }
              : item
          )
        );
        alert(`You can only add a maximum of ${maxQuantity} items for this product.`);
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      }
    } else {
      if (quantity > maxQuantity) {
        setCartItems([...cartItems, { ...product, quantity: maxQuantity }]);
        alert(`You can only add a maximum of ${maxQuantity} items for this product.`);
      } else {
        setCartItems([...cartItems, { ...product, quantity }]);
      }
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
