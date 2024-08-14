import React, { useState } from 'react';

// Mock functions to filter results (implement your actual logic)
const filterResultsByStatus = (status: string) => {
  console.log(`Filtering results by status: ${status}`);
};

const filterResultsByCategory = (category: string) => {
  console.log(`Filtering results by category: ${category}`);
};

const Sidebar: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('Owners');

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
    filterResultsByStatus(status);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    filterResultsByCategory(category);
  };

  return (
    <aside className="flex flex-col w-full sm:w-[240px] md:w-[280px] lg:w-[320px] p-4 bg-white rounded-xl shadow-md">
      {/* Status Filters */}
      <div className="flex flex-col mb-4">
        <h2 className="text-lg font-bold text-black mb-2">Status</h2>
        <div className="flex flex-col text-sm font-semibold text-zinc-900">
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              className={`flex justify-center items-center px-3 py-2 text-blue-500 ${selectedStatus === 'All' ? 'bg-indigo-50 border-blue-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleStatusClick('All')}
            >
              All
            </button>
            <button
              className={`flex items-center px-3 py-2 ${selectedStatus === 'Registered' ? 'bg-green-50 border-green-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleStatusClick('Registered')}
            >
              <div className="h-2.5 w-2.5 bg-green-500 rounded-full mr-1" />
              Registered
            </button>
            <button
              className={`flex items-center px-3 py-2 ${selectedStatus === 'Pending' ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleStatusClick('Pending')}
            >
              <div className="h-2.5 w-2.5 bg-amber-300 rounded-full mr-1" />
              Pending
            </button>
            <button
              className={`flex items-center px-3 py-2 ${selectedStatus === 'Abandoned' ? 'bg-red-50 border-red-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleStatusClick('Abandoned')}
            >
              <div className="h-2.5 w-2.5 bg-red-500 rounded-full mr-1" />
              Abandoned
            </button>
            <button
              className={`flex items-center px-3 py-2 ${selectedStatus === 'Others' ? 'bg-blue-50 border-blue-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleStatusClick('Others')}
            >
              <div className="h-2.5 w-2.5 bg-blue-500 rounded-full mr-1" />
              Others
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col mb-4">
        <h2 className="text-lg font-bold text-black mb-2">Categories</h2>
        <div className="flex flex-col">
          <div className="flex gap-2 mb-2">
            <button
              className={`flex-1 py-2 text-center ${selectedCategory === 'Owners' ? 'bg-indigo-50 text-blue-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleCategoryClick('Owners')}
            >
              Owners
            </button>
            <button
              className={`flex-1 py-2 text-center ${selectedCategory === 'Law Firms' ? 'bg-indigo-50 text-blue-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleCategoryClick('Law Firms')}
            >
              Law Firms
            </button>
            <button
              className={`flex-1 py-2 text-center ${selectedCategory === 'Attorneys' ? 'bg-indigo-50 text-blue-500' : 'bg-white border-neutral-300'} rounded-xl border`}
              onClick={() => handleCategoryClick('Attorneys')}
            >
              Attorneys
            </button>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/857eb230ca2ec310e792aa6c788334b773133239a5b1531c85feb79af907a481?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
            className="object-contain mt-1.5 rounded-xl aspect-[24.39] w-[40px]"
            alt="Category Indicator"
          />
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col mb-4">
        <div className="flex items-center p-2 bg-white rounded-xl border border-neutral-300">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0acf4206a078e03a07bb5be3e6193df599cfc1a3f18ce228a87093b2fdfcf7?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
            className="object-contain w-[17px] mr-2"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none focus:outline-none"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Display Options */}
      <div className="flex flex-col font-bold text-black bg-white rounded-xl shadow-md p-4">
        <h2 className="text-lg">Display</h2>
        <div className="flex gap-3 mt-3 text-sm">
          <button className="flex-1 py-2 bg-white rounded-lg shadow-md">
            Grid View
          </button>
          <button className="flex-1 py-2 bg-white rounded-lg">
            List View
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


