import { formatDate } from "@/utils/formatDate";
import { useState } from "react";

const messagess = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
];

export default function DashboardMessages({ messages }: any) {
  const [activeMessage, setActiveMessage] = useState<any>({});
  return (
    <div className="w-full flex gap-4">
      <div className="w-4/12">
        <ul role="list" className="divide-y divide-gray-200">
          {messages?.map((auto_message: any) => (
            <li
              onClick={() => setActiveMessage(auto_message)}
              key={auto_message?._id}
              className="relative bg-white  px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <a href="#" className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-9"
                        src={auto_message?.message?.publisher?.image}
                      />
                      <div className="truncate text-sm font-medium text-gray-900">
                        <p>{auto_message?.message?.publisher?.email}</p>
                        <p className="text-gray-400">
                          {" "}
                          {formatDate(auto_message?.created_at)}{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-1  px-12">
                <p className="truncate capitalize text-sm font-medium text-gray-900">
                  {auto_message?.message?.message_type?.replaceAll("_", " ")}
                </p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {auto_message?.message?.message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="  border rounded-lg w-8/12">
        <div className="relative bg-white px-4 py-5 ">
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <div className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="truncate text-sm font-medium text-gray-900">
                  From: {activeMessage?.message?.publisher?.email}
                </p>
                <p className="truncate text-sm font-medium text-gray-900">
                  Subject:{" "}
                  <span className="text-blue-600 capitalize">
                    {activeMessage?.message?.message_type?.replaceAll("_", " ")}
                  </span>
                </p>
              </div>{" "}
              <p className="flex-shrink-0 mt-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Date: {formatDate(activeMessage?.created_at)}
              </p>
            </div>
            <a
              href={`/stores/${activeMessage?.message?.publisher?._id}`}
              className="py-1.5 text-blue-600 border-blue-600 h-fit px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border   bg-white   shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 "
            >
              Visit Store
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="mt-8">
            <p className="line-clamp-2 text-sm text-gray-600">
              {activeMessage?.message?.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
