import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center mt-5 ml-11 w-full max-w-[1265px] md:ml-0">
      <div className="flex flex-wrap gap-3 md:gap-7 font-bold">
        <div className="text-base leading-loose text-gray-600">
          Also try searching for
        </div>
        <div className="flex gap-2 md:gap-3.5 text-xs leading-loose text-center text-amber-600">
          <button className="px-3 py-2 bg-orange-50 rounded-xl border border-amber-600 min-h-[35px]">
            nike*
          </button>
          <button className="px-3 py-2 bg-orange-50 rounded-xl border border-amber-600 min-h-[35px]">
            *ike
          </button>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6 items-center mt-4 md:mt-0">
        <div className="flex justify-center items-center px-2.5 py-3 bg-white rounded-lg border border-solid border-stone-300 min-h-[42px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a5002dcaa0b7d557e31ce4a4852233b5f524d8a615c82902375566e0279ce9?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
            className="object-contain w-[51px]"
            alt="Filter option 1"
          />
        </div>
        <button aria-label="Filter option 2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/495af1c19636670da103ecbffcc9b4b82887e22155f093b01aca0a2761e3b127?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
            className="object-contain w-8"
            alt="Filter option 2"
          />
        </button>
        <button aria-label="Filter option 3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d3f3e4752e6f33725aeeb2addb7ceffa9a48cb336507b04ff6b5a46886a6b4?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
            className="object-contain w-8"
            alt="Filter option 3"
          />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
