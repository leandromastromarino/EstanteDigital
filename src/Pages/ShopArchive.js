import getProductsByCategory from "../Components/ItemListContainer/FiltroProductos.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";
function ShopArchive() {
  const itemsCollectionRef = collection(db, "items");
  const data = {};
  const { categoryId } = useParams();
  const [itemList, setItemList] = useState([]);
  console.log("categoryId: " + categoryId);

  console.log(categoryId);
  const getItemList = async () => {
    const data = await getDocs(itemsCollectionRef);
    var productos = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    if (categoryId !== undefined) {
      productos = productos.filter((p) => p.categoria === categoryId);
    }

    setItemList(productos);
    console.log(productos);
  };

  useEffect(() => {
    const obtenerProductos = async (categoryId) => {
      try {
        getItemList(categoryId);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    // Llamas a la función asíncrona dentro de useEffect
    obtenerProductos(categoryId);
  }, [categoryId]); // Se ejecutará cuando cambie categoryId
  // Llamas a la función asíncrona

  return (
    <div>
      <h1>Galeria de productos</h1>
      <div className="columns-3">
        {itemList.map((producto) => {
          return (
            <article
              key={producto.id}
              className="justify-center p-5 align-middle"
            >
              <h3>{producto.nombre}</h3>
              <img src={producto.fotourl} className="producto-img" />
              <h3 className="py-2 text-2xl font-bold text-segundo">
                ${producto.precio}
              </h3>
              <h4 className="pb-10">
                {" "}
                3 Cuotas de ${(producto.precio / 3).toFixed(0)}{" "}
              </h4>
              <Link
                to={`/Product/${producto.id}`}
                className="justify-center px-10 py-2 font-bold align-middle rounded text-terciario bg-segundo"
              >
                Detalle
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ShopArchive;
