import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" />
      <button>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
