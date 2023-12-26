// Carrito.js
import React from "react";
import { useCarrito } from "../Components/CartWidget/CartContext.js";

const Carrito = () => {
  const { carrito } = useCarrito();
  console.log(carrito);
  return (
    <div>
      <h2>Productos en el carrito:</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>{producto.nombre}</li>
          // Aquí asumí que cada producto tiene una propiedad 'nombre'.
          // Ajusta esto según la estructura de tus productos.
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
