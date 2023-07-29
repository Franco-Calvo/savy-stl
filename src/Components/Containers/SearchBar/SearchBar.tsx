import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" />
      <button>
        <FaSearch className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
