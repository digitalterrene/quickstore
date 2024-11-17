import { fetchData } from "@/api-calls/account-information/fetchData";
import UserPage from "@/components/page-componennts/user/UserPage";
import React from "react";

export default async function page({
  searchParams,
  params,
}: {
  searchParams: any;
  params: any;
}) {
  const id = params.user_id;
  const type_ = searchParams.authenticationStatus;
  const auth_id = searchParams.authenticationID;
  const token = searchParams.authenticationToken;
  const requested_key = "account_information";
  const response = await fetchData(id, type_, auth_id, token, requested_key);

  return (
    <div className=" py-20">
      <UserPage account_information={response?.data} />
    </div>
  );
}
