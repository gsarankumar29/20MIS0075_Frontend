
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./searchbar";
import StatusIndicator from "./statusIndicator";
import FilterBar from "./Filterbar";
import ResultList from "./ResultList";
import Sidebar from "./Sidebar";

const TrademarkSearch: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white pb-[1345px] max-md:pb-24">
      <Header />
      <main className="flex flex-col items-start px-11 w-full max-md:px-5 max-md:max-w-full">
        <SearchBar />
        <StatusIndicator status={"searching"} />
        <FilterBar />
        <div className="flex flex-wrap gap-5 justify-between items-start mt-5 ml-11 w-full max-w-[1265px] max-md:max-w-full">
        <ResultList />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default TrademarkSearch;

