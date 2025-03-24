import { createContext, useContext, useState } from "react";
import { property } from "../../data/dummyData";  

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Search Function
  const handleSearch = (query) => {
    setSearchTerm(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Filter properties based on search term (case insensitive)
    const results = property.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
