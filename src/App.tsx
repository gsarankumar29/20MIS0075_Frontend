import React, { useState } from 'react';
import './index.css';

import Header from './components/TrademarkSearch/Header';
import SearchBar from './components/TrademarkSearch/searchbar';
import StatusIndicator from './components/TrademarkSearch/statusIndicator';
import FilterBar from './components/TrademarkSearch/Filterbar';
import ResultList from './components/TrademarkSearch/ResultList';
import Sidebar from './components/TrademarkSearch/Sidebar';

const TrademarkSearch: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white pb-[1345px] max-md:pb-24">
      <Header />
      <main className="flex flex-col items-start px-11 w-full max-md:px-5 max-md:max-w-full">
        <SearchBar />
        <StatusIndicator status={'searching'} />
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



