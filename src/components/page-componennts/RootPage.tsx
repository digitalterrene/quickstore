"use client";
import React from "react";
import ProductsTemplate from "../templates/ProductsTemplate";

export default function RootPage({ response }: any) {
  // console.log({ response });
  return (
    <div>
      <ProductsTemplate
        response={response }    
      />
    </div>
  );
}
