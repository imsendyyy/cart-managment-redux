import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 250 },
  { id: 4, name: "Product D", price: 60 },
  { id: 5, name: "Product E", price: 540 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-lg text-gray-600 mb-4">${product.price}</p>
            <button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

