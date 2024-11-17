import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCardLong = ({ product }: any) => {
  return (
    <div className="flex w-full bg-white shadow-md border rounded-lg overflow-hidden mb-4">
      <div className="w-1/3">
        <img
          className="object-cover w-full h-full"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="w-2/3 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-blue-600 text-2xl font-semibold">
              ${product.price}
            </p>
            <div className="flex items-center">
              <div className="text-yellow-500 flex">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.385 2.834 8.719L12 17.999l-7.417 5.385 2.834-8.719L.001 9.006h9.167z" />
                    </svg>
                  ))}
              </div>
              <p className="ml-2 text-gray-600">{product.reviews} reviews</p>
            </div>
            <p className="text-gray-600">Operating System: {product.os}</p>
            <p className="text-gray-600">Display Size: {product.displaySize}</p>
            <p className="text-gray-600">RAM: {product.ram}</p>
            <p className="text-gray-600">Built-In Memory: {product.memory}</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-gray-500 hover:text-red-500 focus:outline-none">
              <FaHeart size={24} />
            </button>
            <button className="mt-4 text-gray-500 hover:text-green-500 focus:outline-none">
              <FaShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLong;
