import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useCart } from "../context/cart-context";
import { Rating } from "./Rating";
export const CartItem = ({ product, quantity }) => {
  const { photos, title, price, rating, _id } = product;

  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const itemQuanTity = cartItems.find(
    (cartItem) => cartItem.product._id === _id
  ).quantity;

  const updateQuantityHandler = (value) => {
    if (value === -1 && itemQuanTity === 1) return;
    updateQuantity({ productId: _id, value });
  };

  return (
    <li className="flex justify-between items-center text-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-4 gap-4">
      <img
        className="rounded-t-lg w-24 h-24 object-scale-down"
        src={photos[0]?.secure_url}
        alt="product"
      />
      <div className="w-1/4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <Rating rating={rating} />
      </div>
      <button 
      onClick={()=>removeFromCart(_id)}
      className="uppercase bg-slate-400 rounded-md px-2 py-1 text-white">
        Remove
      </button>
      <div className="py-2 gap-2 flex items-center w-1/4">
        <button onClick={() => updateQuantityHandler(-1)}>
          <AiOutlineMinusCircle size={25} color="white" />
        </button>
        <span className="text-xl border-2 border-white rounded-sm w-12  text-center h-fit">
          {quantity}
        </span>
        <button onClick={() => updateQuantityHandler(1)}>
          <BsPlusCircle size={25} color="white" />
        </button>
      </div>
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        ₹ {price}
      </span>
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        ₹ {price*quantity}
      </span>
    </li>
  );
};
