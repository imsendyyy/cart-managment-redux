import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-xl text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">${item.price}</p>
                  <div className="flex items-center justify-center mb-4">
                    <label className="mr-2 text-gray-700">Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: +e.target.value,
                          })
                        )
                      }
                      className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total Amount Box */}
            <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Total: ${totalAmount.toFixed(2)}
              </h3>
              <button
                onClick={() => dispatch(clearCart())}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
