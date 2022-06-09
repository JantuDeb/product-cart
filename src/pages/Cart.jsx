import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { Checkout } from "../components/Checkout";
import { useCart } from "../context/cart-context";

const Cart = () => {
  const { cartItems } = useCart();
  return cartItems.length === 0 ? (
    <div className="text-center">
      <h3 className="font-bold text-2xl text-white m-2">No Items in cart</h3>
      <Link to="/" className="bg-slate-600 p-2 rounded-sm text-white">
        Shop now
      </Link>
    </div>
  ) : (
    <div className="p-4 h-screen overflow-hidden pt-16">
      <div className="flex items-center justify-between px-8 py-2 font-semibold text-xl text-white shadow-lg">
        <p>Shopping Cart</p>
        <p>Price</p>
      </div>
      <ul className="flex flex-col gap-4 h-3/4 overflow-y-auto my-2">
        {cartItems.map(({ product, quantity }) => (
          <CartItem key={product._id} product={product} quantity={quantity} />
        ))}
      </ul>
      <Checkout />
    </div>
  );
};

export default Cart;
