import listaProductos from "../productos.js";
import { Link } from "react-router-dom";
function ShopArchive() {
  console.log(listaProductos);
  return (
    <div>
      <h1>Galeria de productos</h1>
      <div className="columns-3">
        {listaProductos.map((producto) => {
          return (
            <article
              key={producto.id}
              className="justify-center p-5 align-middle"
            >
              <h3>{producto.title}</h3>
              <img src={producto.image} className="producto-img" />
              <h3 className="py-2 text-2xl font-bold text-segundo">
                ${producto.price}
              </h3>
              <h4 className="pb-10"> 3 Cuotas de ${producto.price / 3} </h4>
              <Link
                to={`/ShopArchive/${producto.id}`}
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
