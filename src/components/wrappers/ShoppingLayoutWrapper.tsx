"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";

export default function ShoppingLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CartProvider>
        <ToastContainer />
        {children}
      </CartProvider>
    </div>
  );
}
