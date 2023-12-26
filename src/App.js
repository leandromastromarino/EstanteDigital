import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import ComoComprar from "./Pages/ComoComprar.js";
import Ofertas from "./Pages/Ofertas.js";
import Nosotros from "./Pages/Nosotros.js";
import Error from "./Pages/Error.js";
import Layout from "./Pages/Layout.js";
import ProductPage from "./Pages/ProductPage.js";
import ShopArchive from "./Pages/ShopArchive.js";
import Carrito from "./Pages/Cart.js";
import { CarritoProvider } from "./Components/CartWidget/CartContext.js";

export default function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ComoComprar" element={<ComoComprar />} />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/ShopArchive/:categoryId" element={<ShopArchive />} />
            <Route path="/ShopArchive" element={<ShopArchive />} />
            <Route path="/Product/:productoId" element={<ProductPage />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}
