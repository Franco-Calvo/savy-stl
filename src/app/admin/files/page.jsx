"use client";

import React, { useRef, useState } from "react";
import "./Files.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import useCategory from "../../../Hooks/useCategory";
import {
  svgEliminar,
  svgEnviado,
  uploadCloud,
} from "../../../Components/Presentation/Icons/icons";
import { Button } from "../../../Components/Containers/Button/Button";

function formatFileSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

export default function Files() {
  const fileInputRef = useRef();
  const imageInputRef = useRef();
  const { categories, loading, error } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryDelete, setSelectedCategoryDelete] = useState("");
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryTitle, setcategoryTitle] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedImageName, setSelectedImageName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const url = "http://localhost:8000/aws/upload";
  const categoryInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.size : 0);
  };

  const handleImageSelect = (event) => {
    const fileImage = event.target.files[0];
    setSelectedImageName(fileImage ? fileImage.size : 0);
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("image", imageInputRef.current.files[0]);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", selectedCategory);

      const token = localStorage.getItem("token");
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });
      setUploadProgress(0);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      setUploadProgress(0);
      // toast.error("Error al subir los archivos");
    }
  };

  const handleCreateCategory = async () => {
    try {
      const categoryName = categoryInputRef.current.value;
      const response = await axios.post(
        "http://localhost:8000/category/create",
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
      await axios.delete(`http://localhost:8000/category/${category._id}`);
      toast.success(`Categoría eliminada: ${category.name}`);
      setSelectedCategoryDelete("");
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar la categoría");
    }
  };

  const filteredCategories = categories.filter((cat) => cat.name);


  return (
    <div className="adminpanel">
      <div className="adminFiles">
        <Toaster position="top-right" />
        <div className="containerSelect">
          <span className="spanIconContainer">
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
              </div>
            )}

            <span className="spanIcon" onClick={handleDeleteCategory}>
              {svgEliminar()}
            </span>
          </span>

          <span className="spanIconContainer">
            <input
              type="text"
              className="categorySelect"
              ref={categoryInputRef}
              onChange={handleChange(setcategoryTitle)}
              placeholder="Nombre de la categoría"
            />
            <span className="spanIcon" onClick={handleCreateCategory}>
              {svgEnviado()}
            </span>
          </span>
        </div>

        <div className="containerUpload">
          <div className="asd">
            <div
              className="dashedContainer"
              onClick={() => fileInputRef.current.click()}
            >
              <span>
                {uploadCloud()}
                <p className="uploadFiles">Subir archivo</p>
                <p className="maxSize">Max 10MB</p>
                <p className="fileName">
                  {selectedFileName ? formatFileSize(selectedFileName) : ""}
                </p>
              </span>
              <input
                type="file"
                ref={fileInputRef}
                name="file"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </div>

            <div
              className="dashedContainer"
              onClick={() => imageInputRef.current.click()}
            >
              <span>
                {uploadCloud()}
                <p className="uploadFiles">Subir imagen</p>
                <p className="maxSize">Max 1MB</p>
                <p className="fileName">
                  {selectedImageName ? formatFileSize(selectedImageName) : ""}
                </p>
              </span>
              <input
                type="file"
                name="image"
                ref={imageInputRef}
                style={{ display: "none" }}
                onChange={handleImageSelect}
              />
            </div>
          </div>

          <div className="containerCatSelect">
            <div className="catInput">
              <input
                placeholder="Título de la publicación"
                value={name}
                onChange={handleChange(setName)}
              />
              <input
                placeholder="Descripción de la publicación"
                value={description}
                onChange={handleChange(setDescription)}
              />
            </div>
            <div className="categories">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error</p>
              ) : (
                <>
                  <select
                    className="categorySelect"
                    value={selectedCategory}
                    onChange={handleChange(setSelectedCategory)}
                  >
                    <option className="categoryOption" value="">
                      Categorías disponibles
                    </option>
                    {filteredCategories.map((cat) => (
                      <option className="" key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <select disabled>
                <option value="Público">No disponible</option>
                <option value="Privado">Privado</option>
              </select>
            </div>
          </div>

          <span className="containerButton">
            <Button className="asdd" text="Subir" onClick={handleUpload} />
          </span>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
