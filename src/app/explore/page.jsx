"use client";
import Navbar from "@/Components/Presentation/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Containers/Card/Card";
import useCategory from "../../Hooks/useCategory";
import actions from "../../store/captureCards/actions";
import styles from "./Explorer.module.css";

const { captureCards } = actions;

export default function Explorer() {
  const { categories } = useCategory();
  const [filterOptions, setFilterOptions] = useState({
    selectedCategory: "",
    searchTerm: "",
  });

  const text = useRef("");

  const sortedCategories = [...categories];

  sortedCategories.sort((a, b) => a.name.localeCompare(b.name));

  const downloadFile = (fileModelLink) => {
    const link = document.createElement("a");
    link.href = fileModelLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = useSelector((store) => store.cardsReducer.cards);
  const publicCards = cards.filter((card) => card.status === "public");

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      selectedCategory: checked ? name : "",
    }));
  };

  useEffect(() => {
    dispatch(
      captureCards({
        captureCategories: filterOptions.selectedCategory,
        captureText: filterOptions.searchTerm,
      })
    );
  }, [dispatch, filterOptions]);

  return (
    <div className={styles.containerExplorer}>

      <Navbar />

      <div className={styles.asideBar}>
        <div className={styles.searchBar}>
          <input
            type="text"
            ref={text}
            placeholder="Busca un modelo aquí"
            onChange={(e) =>
              setFilterOptions((prevOptions) => ({
                ...prevOptions,
                searchTerm: e.target.value,
              }))
            }
          />

          <button>
            <FaSearch className={styles.searchIcon} />
          </button>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categorias</h2>
          <div className={styles.categoryButton}>
            {sortedCategories.map((cat) => (
              <div className={styles.category} key={cat.name}>
                <label className={styles.categoryLabel} htmlFor={cat.name}>
                  {cat.name}
                </label>
                <input
                  className={styles.inputNone}
                  type="checkbox"
                  id={cat.name}
                  name={cat.name}
                  checked={filterOptions.selectedCategory === cat.name}
                  onChange={handleCategoryChange}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.spamContainer}>
          <div className={styles.spamBox}>Publicite aquí</div>
          <div className={styles.spamBox}>Publicite aquí</div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.spamCards}>Publicite aquí</div>
        {publicCards.map((card) => (
          <Card
            key={card._id}
            title={card.name}
            description={card.description}
            image={card.image}
            text="Descargar"
            onClick={() => downloadFile(card.fileModel)}
          />
        ))}
      </div>
    </div>
  );
}
