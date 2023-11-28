import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/footer.js";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
