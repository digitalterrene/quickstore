import React from "react";

export default function DashboardHeading() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 border-b pb-4 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Manage Account
        </h2>
      </div>
    </div>
  );
}
