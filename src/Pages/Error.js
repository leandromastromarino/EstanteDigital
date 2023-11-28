import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="align-middle center">
      Error 404. La página no existe<br></br>
      <Link to="/" className="text-sm font-semibold leading-6 text-segundo">
        Ir a Inicio
      </Link>
    </div>
  );
}

export default Error;
