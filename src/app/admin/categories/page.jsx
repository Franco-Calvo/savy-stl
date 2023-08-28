"use client";
import useCategory from "../../../Hooks/useCategory";
import React, { useState, useRef } from "react";
import axios from "axios";
import "./Categories.css";
import { Toaster, toast } from "sonner";

export default function Categories() {
  const { categories, loading, error } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const categoryInputRef = useRef(null);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCreateCategory = async () => {
    try {
      const categoryName = categoryInputRef.current.value;
      const response = await axios.post(
        "https://savypixel.onrender.com/category/create",
        {
          name: categoryName,
        }
      );
      toast.success(`Categoría creada: ${response.data.name}`);
      setCategoryName("");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const category = categories.find((cat) => cat.name === selectedCategory);
      await axios.delete(`https://savypixel.onrender.com/category/${category._id}`);
      toast.success(`Categoría eliminada: ${category.name}`);
      setSelectedCategory("");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const filteredCategories = categories.filter(
    (cat) => cat.name !== selectedCategory
  );

  return (
    <div className="adminPanel">
      <Toaster position="top-right" />

      <div className="adminCategories">
        <div className="createCategories">
          <h3>Eliminar categoría</h3>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="createCategories">
              <select
                className="categorySelect"
                value={selectedCategory}
                onChange={handleChange}
              >
                <option className="categoryOption" value="">
                  Categorías disponibles
                </option>
                {filteredCategories.map((cat) => (
                  <option
                    className="categoryOption"
                    key={cat._id}
                    value={cat.name}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
              <button className="buttonCreate" onClick={handleDeleteCategory}>
                Eliminar
              </button>
            </div>
          )}
        </div>

        <div className="createCategories">
          <h3>Crear categoría</h3>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Nombre de la categoría"
            className="inputCategory"
            ref={categoryInputRef}
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          />
          <button className="buttonCreate" onClick={handleCreateCategory}>
            + Crear
          </button>
        </div>
      </div>
    </div>
  );
}
