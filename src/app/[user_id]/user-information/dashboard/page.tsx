import { fetchData } from "@/api-calls/products/fetchData";
import { userFetchData } from "@/api-calls/user-crud-operations/userFetchData";
import DashboardPage from "@/components/ui-components/dashboard/DashboardPage";
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
  const product_reviews = await fetchData(
    id,
    auth_id,
    token,
    "customer_id",
    `${params.user_id}`,
    "reviews",
    page
  );

  const orders = await fetchData(
    id,
    auth_id,
    token,
    "customer_id",
    id,
    "orders",
    page
  );
  const wishlist = await userFetchData(id, auth_id, token, "wishlist");
  const messages = await userFetchData(id, auth_id, token, "messages");

  return (
    <div>
      <DashboardPage
        product_reviews={product_reviews?.data}
        orders={orders?.data?.results}
        wishlist={wishlist?.data}
        messages={messages?.data}
      />
    </div>
  );
}
