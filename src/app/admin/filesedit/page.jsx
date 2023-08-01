import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBinFill, RiSaveFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import actions from "../../../store/captureCards/actions";
import "./FilesEdit.styles.css";

const { captureCards } = actions;

export default function FilesEdit() {
  const cards = useSelector((store) => store.cardsReducer.cards);
  const dispatch = useDispatch();
  const [productStatus, setProductStatus] = useState({});
  const [filterOptions /*setFilterOptions*/] = useState({
    selectedCategory: "",
    searchTerm: "",
  });

  useEffect(() => {
    dispatch(
      captureCards({
        captureCategories: filterOptions.selectedCategory,
        captureText: filterOptions.searchTerm,
      })
    );
  }, [dispatch, filterOptions]);

  const handleSaveProduct = (productId, name, description) => {
    const newName =
      name.trim() !== ""
        ? name
        : cards.find((card) => card._id === productId).name;

    const newDescription =
      description.trim() !== ""
        ? description
        : cards.find((card) => card._id === productId).description;

    const newStatus = productStatus[productId] || "public";

    axios
      .put(`http://localhost:8000/aws/files/${productId}`, {
        name: newName,
        description: newDescription,
        status: newStatus,
      })
      .then((response) => {
        toast.success("Cambios guardados:", response.data.message);
      })
      .catch((error) => {
        toast.error("Error al guardar cambios:", error);
      });
  };

  const handleDeleteProduct = (productId) => {
    toast("¿Estás seguro de que quieres eliminar el producto?", {
      position: "top-right",
      duration: 5000,
      action: {
        label: "Eliminar",
        onClick: () => {
          axios
            .delete(`http://localhost:8000/aws/files/${productId}`)
            .then((response) => {
              toast.success("Producto eliminado:", response.data);
            })
            .catch((error) => {
              toast.error("Error al eliminar el producto:", error);
            });
        },
      },
    });
  };

  useEffect(() => {
    const initialStatus = {};

    cards.forEach((card) => {
      initialStatus[card._id] = card.status;
    });

    setProductStatus(initialStatus);
  }, [cards]);

  return (
    <div className="adminpanel">
      <Toaster position="top-right" />

      <div className="adminFiles">
        <h1 className="productTable">Tabla de Productos</h1>
        <table className="tableBody">
          <thead>
            <tr>
              <th className="inputCheckbox">Producto</th>
              <th>Categoría</th>
              <th>Estado</th>
              <th>Descripción</th>
              <th>Guardar</th>
              <th className="inputDownloads">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card._id}>
                <td className="productImage">
                  <img
                    className="tableImage"
                    src={card.image}
                    alt={`Imagen de ${card.name}`}
                  />
                  <input
                    type="text"
                    name={card.name}
                    id={`cardName_${card._id}`}
                    placeholder={card.name}
                    className="cardEdit"
                  />
                </td>
                <td>{card.category}</td>
                <td>
                  <select
                    value={productStatus[card._id] || "public"}
                    onChange={(e) =>
                      setProductStatus((prevState) => ({
                        ...prevState,
                        [card._id]: e.target.value,
                      }))
                    }
                  >
                    <option value="public">Público</option>
                    <option value="private">Privado</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name={card.description}
                    id={`cardDesc_${card._id}`}
                    placeholder={card.description}
                    className="cardEdit"
                  />
                </td>
                <td className="save">
                  <RiSaveFill
                    onClick={() =>
                      handleSaveProduct(
                        card._id,
                        document.getElementById(`cardName_${card._id}`).value,
                        document.getElementById(`cardDesc_${card._id}`).value
                      )
                    }
                  />
                </td>
                <td className="save">
                  <RiDeleteBinFill
                    onClick={() => handleDeleteProduct(card._id, card.name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
