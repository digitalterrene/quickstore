import { fetchData } from "@/api-calls/products/fetchData";
import RootPage from "@/components/page-componennts/RootPage";
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
  const page = searchParams.page || 1;
  const token = searchParams.authenticationToken;
  const search_key = "data_type";
  const search_value = "products";
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
      <RootPage response={products?.data} />
    </div>
  );
}
