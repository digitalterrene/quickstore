"use client";
import React, { useEffect } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
export default function Card({ product }: any) {
  return (
    <div className="w-56 group   h-80 flex flex-col justify-center rounded-2xl p-4 bg-white space-y-3 pb-2">
      <a href={`/products/${product && product._id && product._id}`}>
        <img
          className="h-48  rounded-xl object-cover object-center mx-auto"
          src={product && product.image && product.image}
        />
      </a>
      <p className="flex items-center font-medium -ml-3 line-clamp-2 gap-x-3.5   px-3 rounded-md text-sm text-gray-800   focus:ring-2   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        {product && product.tagline && product.tagline}
      </p>
      <div className="flex items-center   justify-between">
        <p className="flex items-center font-bold text-gray-500 -ml-3 gap-x-3.5  px-3 rounded-md text-sm    focus:ring-2   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          $ {product && product.value && product.value}
        </p>
        <div className="group-hover:flex transition-all delay-1000 items-center hidden gap-2">
          <button
            type="button"
            className="p-1 text-xl  bg-red-100   hover:bg-red-500  inline-flex justify-center items-center gap-2 rounded-md  text-gray-800 border border-transparent font-semibold   hover:text-white   focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all  "
          >
            <AiOutlineHeart />
          </button>
          <div className="  relative inline-flex">
            <button
              type="button"
              className="p-1  text-xl inline-flex justify-center items-center gap-2 hover:bg-green-500 rounded-md text-gray-800 bg-green-300  border border-transparent font-semibold  hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all  "
            >
              <BsStar />
            </button>
          </div>
          <button
            type="button"
            className="p-1 text-xl inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all  "
          >
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
