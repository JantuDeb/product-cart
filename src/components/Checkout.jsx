import React from "react";
import { useCart } from "../context/cart-context";

export const Checkout = () => {
  const { cartItems } = useCart();
  const price = cartItems.reduce(
    (prev, curr) => {
      return {
        ...prev,
        totalAmount: prev.totalAmount + curr.product.price * curr.quantity,
        discount:
          prev.discount +
          Math.ceil(curr.product.price * curr.quantity * curr.product.discount),
      };
    },
    { totalAmount: 0, discount: 0 }
  );
  return (
    <div className="flex justify-around shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
      <div>
        <div class="flex items-center mb-4">
          <input
            id="card"
            type="radio"
            value=""
            checked
            name="payment-mode"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="card"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Credit Card/Debit Card
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            checked
            id="paytm-wallet"
            type="radio"
            value=""
            name="payment-mode"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="paytm-wallet"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Paytm/Wallet
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            checked
            id="upi"
            type="radio"
            value=""
            name="payment-mode"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="upi"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            UPI Payment
          </label>
        </div>
      </div>
      <div className=" border-l-2 border-gray-400"></div>
      <div>
        <div className="flex items-center justify-between gap-4 my-4 text-white font-medium">
          <h4>Grand Total </h4>
          <span> ₹ {price.totalAmount}</span>
        </div>
        <button className="bg-blue-700 shadow-lg rounded-md px-2 py-1 text-bold text-white">
          Pay Now
        </button>
      </div>
    </div>
  );
};
