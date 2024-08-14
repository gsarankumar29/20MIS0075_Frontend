
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <form className="flex z-10 flex-wrap gap-10 ml-8 max-w-full leading-8 text-center w-[796px]">
      <img
        loading="lazy"
        src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Flogo_trademarkia.png&w=384&q=75"
        className="object-contain shrink-0 my-auto max-w-full aspect-[4.42] w-[155px]"
        alt="Company logo"
      />
      <div className="flex flex-wrap flex-auto gap-3 items-center min-h-[92px] max-md:max-w-full">
        <div className="flex flex-col grow shrink self-stretch my-auto text-sm font-medium rounded-none min-w-[240px] text-zinc-600 w-[430px] max-md:max-w-full">
          <div className="flex flex-col justify-center items-start px-3 py-2.5 w-full bg-white rounded-xl border border-solid border-neutral-300 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-2 justify-center items-center px-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47939a3974cfb3634fce7fe5795a34ed0df2b8f444ef8ff070dd090d2fa016a0?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt=""
              />
              <label htmlFor="searchInput" className="sr-only">
                Search Trademark
              </label>
              <input
                type="text"
                id="searchInput"
                className="self-stretch my-auto w-full bg-transparent border-none focus:outline-none"
                placeholder="Search Trademark Here eg. Mickey Mouse"
                aria-label="Search Trademark"
                
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="grow shrink gap-3.5 self-stretch px-9 py-2.5 my-auto text-base font-bold text-white whitespace-nowrap bg-blue-500 rounded-xl min-h-[50px] w-[99px] max-md:px-5"
          
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;


