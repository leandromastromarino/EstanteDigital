// CarritoContext.js
import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    return new Promise((resolve) => {
      setCarrito((prevCarrito) => {
        const nuevoCarrito = Array.isArray(prevCarrito)
          ? [...prevCarrito, producto]
          : [producto];
        resolve(nuevoCarrito);
        return nuevoCarrito;
      });
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
