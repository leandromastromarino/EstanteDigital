import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import ComoComprar from "./Pages/ComoComprar.js";
import Ofertas from "./Pages/Ofertas.js";
import Nosotros from "./Pages/Nosotros.js";
import Error from "./Pages/Error.js";
import Layout from "./Pages/Layout.js";
import ProductPage from "./Pages/ProductPage.js";
import ShopArchive from "./Pages/ShopArchive.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ComoComprar" element={<ComoComprar />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Nosotros" element={<Nosotros />} />

          <Route path="/ShopArchive" element={<ShopArchive />} />
          <Route path="/ShopArchive/:productoId" element={<ProductPage />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
