
import CartWidget from "../CartWidget/CartWidget";
function Navbar() {
    return (
        <div className="container">
            <div className="row align-items-center pt-3" >
                <div className="col">
                    <img src="../img/logo.png" alt="Descripción de la imagen" class="img-fluid" style={{width: "200px"}} />
                </div>
                <div className="col"> 
                    <a className="p-2">Home</a>
                    <a className="p-2">Categorias</a>
                    <a className="p-2">Ofertas</a>
                </div>
                <div className="col p-2">
                    <CartWidget/>
                </div>
            </div>
        </div>
    );
    
}

export default Navbar;