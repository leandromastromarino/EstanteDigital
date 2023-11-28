import portadaImg from "../../img/libro-escaleras.jpg";
function Portada() {
  return (
    <div className="flex">
      <div className="flex  flex-col justify-around pl-20 min-w-[40%]">
        <div>
          <p className="text-segundo text-4xl  font-bold">
            Todos los libros en un solo lugar
          </p>
          <p className="text-segundo text-base pt-2">
            Importamos cualquier libro
          </p>
        </div>
        <div className="">
          <button
            type="button"
            className="inline-block rounded-full bg-primario px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <p className="px-14 py-2 "> Tienda</p>
          </button>
        </div>
      </div>
      <div className="mr-0 flex justify-end p-0">
        <img className="w-3/4" src={portadaImg} alt="portada" />
      </div>
    </div>
  );
}

export default Portada;
