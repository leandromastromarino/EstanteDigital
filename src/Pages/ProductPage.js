import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCarrito } from "../Components/CartWidget/CartContext.js";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase.js";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Producto() {
  const { productoId } = useParams();
  console.log("el produci id es ", productoId);
  const itemsCollectionRef = collection(db, "items");
  const [product, setProduct] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  const getItemList = async () => {
    const data = await getDocs(itemsCollectionRef);
    const producto = data.docs
      .map((doc) => ({ id: doc.id, ...doc.data() })) // Incluye el ID del documento
      .find((p) => p.id === productoId);

    if (producto) {
      setProduct(producto);
      console.log("El producto es:", producto);
    } else {
      console.log(`Producto con ID ${productoId} no encontrado`);
      setProduct(undefined);
    }
  };

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        getItemList();
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    // Llamas a la función asíncrona dentro de useEffect
    obtenerProducto();
  }, [productoId]);

  const HandleClick = async () => {
    console.log("apreto el boton");
    console.log(product);
    const nuevoProducto = {
      nombre: product.nombre,
      valor: product.precio,
    };

    const carrito = await agregarAlCarrito(nuevoProducto);
    console.log("el carrito acumulado es:", carrito);
  };

  return (
    <div className="flex flex-row">
      {product ? (
        <>
          <div className="px-10">
            <img
              src={product.fotourl}
              className="justify-center max-w-xl align-middle"
            />
          </div>
          <div className="items-center content-around justify-around h-auto justify-items-stretch">
            <h3 className="pb-10 text-4xl font-bold text-segundo">
              {product.nombre}
            </h3>

            <h3 className="text-2xl font-bold text-primario">
              {product.precio}
            </h3>
            <h4 className="pb-10 font-semibold text-l text-segundo">
              {" "}
              3 Cuotas de ${product.precio / 3}{" "}
            </h4>
            <button
              onClick={HandleClick}
              className="justify-center px-10 py-4 font-bold align-middle rounded-full text-terciario bg-primario"
            >
              Agregar al Carrito
            </button>
          </div>
        </>
      ) : (
        <h3>Producto no encontrado</h3>
      )}
    </div>
  );
}

export default Producto;
