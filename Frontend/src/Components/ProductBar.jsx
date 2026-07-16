import {
  Check,
  ChevronDown,
  ListFilter,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

function ProductBar() {
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Popularity");
  const sortOptions = ["Popularity", "Most Ordered", "Price: Low to High", "Price: High to Low", "Latest"];

  const selectSort = (option) => {
    setSortBy(option);
    setOpen(false);
  };

  return (
    <div className="flex items-center bg-white max-w-7xl mx-auto border border-zinc-600 shadow-sm rounded-2xl shadow-zinc-800/60 p-2.5 mt-3">
      <div className="p-2 flex cursor-pointer text-sm items-center gap-1.5 bg-[#f3e4ce]/65 rounded-lg">
        <ListFilter strokeWidth={1.5} size={17} />
        Filter
        <SlidersHorizontal size={17} strokeWidth={1.5} className="" />
      </div>
      <div className="max-w-7xl relative  mr-2">
        <Search
          size={18}
          className="absolute cursor-pointer text-gray-700 top-2 right-3"
        />
        <input
          className="border w-120 ml-20 border-zinc-400 outline-0 text-zinc-600 focus:border-green-800 bg-white rounded-full px-8 py-1 "
          type="text"
          placeholder="Search medicines..."
        />
      </div>
        <div className="p-2 ml-90 mt-0.5 text-sm ">Sort By</div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="p-2 cursor-pointer text-sm items-center flex bg-[#f3e4ce]/65 rounded-lg min-w-43 justify-between hover:bg-[#f3e4ce] transition-colors"
        >
          {sortBy}
          <ChevronDown
            size={18}
            strokeWidth={1.3}
            className={`ml-4 text-black transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute right-0 z-10 mt-2 w-52 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-lg shadow-zinc-900/15"
          >
            {sortOptions.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={sortBy === option}
                  onClick={() => selectSort(option)}
                  className={`flex  w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    sortBy === option
                      ? "bg-green-50 font-medium text-green-900"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {option}
                  {sortBy === option && <Check size={17} strokeWidth={2} />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductBar;
