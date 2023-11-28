import { BsCartDash } from "react-icons/bs";
import { IconContext } from "react-icons";
function CartWidget() {
  return (
    <div className="flex">
      <IconContext.Provider
        value={{
          color: "#175A55",
          size: "1.8em",
          className: "global-class-name",
        }}
      >
        <div>
          <BsCartDash />
        </div>
      </IconContext.Provider>
      <p className="text-lg text-secundario">0</p>
    </div>
  );
}

export default CartWidget;
