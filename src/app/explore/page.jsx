"use client";
import Navbar from "@/Components/Presentation/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Containers/Card/Card";
import useCategory from "../../Hooks/useCategory";
import actions from "../../store/captureCards/actions";
import styles from "./Explorer.module.css";
import useDebounce from "@/Hooks/useDebounce";

const { captureCards } = actions;

export default function Explorer() {
  const { categories } = useCategory();
  const [filterOptions, setFilterOptions] = useState({
    selectedCategories: [],
    searchTerm: "",
  });
  const [itemsToShow, setItemsToShow] = useState(8);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearchTerm = useDebounce(filterOptions.searchTerm, 300);
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
    setFilterOptions((prevOptions) => {
      let updatedCategories = [...prevOptions.selectedCategories];
      if (checked) {
        updatedCategories.push(name);
      } else {
        updatedCategories = updatedCategories.filter((cat) => cat !== name);
      }
      return {
        ...prevOptions,
        selectedCategories: updatedCategories,
      };
    });
  };

  const handleLoadMore = () => {
    const newItemsToShow = itemsToShow + 8;
    setItemsToShow(newItemsToShow);

    if (newItemsToShow >= publicCards.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    dispatch(
      captureCards({
        captureCategories: filterOptions.selectedCategories,
        captureText: debouncedSearchTerm,
      })
    );
  }, [dispatch, filterOptions.selectedCategories, debouncedSearchTerm]);

  return (
    <div className={styles.containerExplorer}>
      <div className={styles.containerAside}>
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
                <div
                  className={`${styles.categoryLabel} ${
                    filterOptions.selectedCategories.includes(cat.name)
                      ? styles.selectedCategory
                      : ""
                  }`}
                  key={cat.name}
                >
                  <label className={styles.categoryLabel} htmlFor={cat.name}>
                    {cat.name}
                  </label>
                  <input
                    className={styles.inputNone}
                    type="checkbox"
                    id={cat.name}
                    name={cat.name}
                    checked={filterOptions.selectedCategories.includes(
                      cat.name
                    )}
                    onChange={handleCategoryChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardsBox}>
          {publicCards.slice(0, itemsToShow).map((card) => (
            <Card
              key={card._id}
              title={card.name}
              description={card.description}
              image={card.image}
              text="Descargar"
              onClick={() => downloadFile(card.fileModel)}
            />
          ))}
          <div className={styles.containerResults}>
            {publicCards.slice(0, itemsToShow).length === 0 ? (
              <div className={styles.noResults}>
                No se han encontrado resultados
              </div>
            ) : null}
          </div>
        </div>
        {publicCards.length > 0 && hasMore && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Cargar más diseños
          </button>
        )}
      </div>
    </div>
  );
}
