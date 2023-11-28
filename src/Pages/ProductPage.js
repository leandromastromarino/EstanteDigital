import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import listaProductos from "../productos.js";

function Producto() {
  const { productoId } = useParams();

  const producto = listaProductos.find((producto) => producto.id == productoId);
  return (
    <div className="flex flex-row">
      <div className="px-10">
        <img
          src={producto.image}
          className="justify-center max-w-xl align-middle"
        />
      </div>
      <div className="items-center content-around justify-around h-auto justify-items-stretch">
        <h3 className="pb-10 text-4xl font-bold text-segundo">
          {producto.title}
        </h3>

        <h3 className="text-2xl font-bold text-primario">{producto.price}</h3>
        <h4 className="pb-10 font-semibold text-l text-segundo">
          {" "}
          3 Cuotas de ${producto.price / 3}{" "}
        </h4>
        <Link
          to={""}
          className="justify-center px-10 py-4 font-bold align-middle rounded-full text-terciario bg-primario"
        >
          Agregar al Carrito
        </Link>
      </div>
    </div>
  );
}

export default Producto;
