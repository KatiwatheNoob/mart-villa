import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearch } from "./SearchContext"; // Import the search context
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { searchTerm, handleSearch, searchResults } = useSearch(); // Get values from context
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="relative">
      {/* Search Input */}
      <form>
        <div
          className={`flex-align-center relative h-9 w-9 transition-all border-slate-300 dark:border-dark rounded-full ${
            showSearchBar && "!w-[150px] md:!w-[200px] border bg-transparent text-inherit"
          }`}
        >
          <input
            type="search"
            className={`outline-none border-none h-0 w-0 bg-transparent ${
              showSearchBar && "!w-full !h-full px-4"
            }`}
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <span
            className={`grid flex-shrink-0 rounded-full w-9 h-9 place-items-center text-white bg-primary sm:cursor-pointer ${
              showSearchBar &&
              "bg-transparent hover:bg-slate-100 text-inherit sm:cursor-pointer dark:hover:bg-hover-color-dark"
            }`}
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            <BiSearch className="text-muted" />
          </span>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-full p-2 z-50">
          {searchResults.map((item) => (
            <Link
              key={item.id}
              to={`/property/${item.id}`}
              className="block p-2 hover:bg-gray-200"
            >
              {item.name} - {item.location}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
