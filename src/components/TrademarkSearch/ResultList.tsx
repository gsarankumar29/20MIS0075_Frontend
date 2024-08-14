import React from "react";
import ResultItem from "./ResultItem";

const mockResults = [
  {
    id: 1,
    mark: "Meta Logo",
    owner: "FACEBOOK INC.",
    serialNumber: "88713620",
    filingDate: "26th Jan 2020",
    status: "Live/Registered",
    registrationDate: "26 Jun 2020",
    expirationDate: "26 Dec 2027",
    description:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "8", "8"],
  },
  {
    id: 1,
    mark: "Meta Logo",
    owner: "FACEBOOK INC.",
    serialNumber: "88713620",
    filingDate: "26th Jan 2020",
    status: "Live/Registered",
    registrationDate: "26 Jun 2020",
    expirationDate: "26 Dec 2027",
    description:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "8", "8"],
  },
  {
    id: 1,
    mark: "Meta Logo",
    owner: "FACEBOOK INC.",
    serialNumber: "88713620",
    filingDate: "26th Jan 2020",
    status: "Live/Registered",
    registrationDate: "26 Jun 2020",
    expirationDate: "26 Dec 2027",
    description:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "8", "8"],
  },
  // ... more mock results
];

const ResultList: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full p-4 max-w-[668px]">
      <div className="flex flex-col w-full text-base font-semibold text-zinc-800">
        <div className="flex justify-between gap-8 w-full px-4">
          <div className="w-1/5">Mark</div>
          <div className="w-1/5">Details</div>
          <div className="w-1/5">Status</div>
          <div className="w-1/5">Class/Description</div>
        </div>
        <div className="mt-2 h-px bg-stone-200 w-full" />
      </div>
      {mockResults.map((result) => (
        <ResultItem key={result.id} {...result} />
      ))}
    </section>
  );
};

export default ResultList;


