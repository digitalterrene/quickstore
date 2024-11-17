import { fetchData } from "@/api-calls/products/fetchData";
import ProductsTemplate from "@/components/templates/ProductsTemplate";
import StoreProductPagesWrapper from "@/components/wrappers/StoreProductPagesWrapper";
import React from "react";

export default async function page({
  searchParams,
  params,
}: {
  searchParams: any;
  params: any;
}) {
  const id = params.user_id;
  const auth_id = searchParams.authenticationID;
  const category = searchParams.category;
  const page = searchParams.page || 1;
  const token = searchParams.authenticationToken;
  const search_key = "quickshop_stores_category";
  const search_value = params.industry;
  const requested_key = "products";
  const products = await fetchData(
    id,
    auth_id,
    token,
    search_key,
    search_value,
    requested_key,
    page
  );
  return (
    <div>
      <StoreProductPagesWrapper title={category}>
        <ProductsTemplate response={products?.data} />
      </StoreProductPagesWrapper>
    </div>
  );
}
