import Portada from "../Components/Portada/portada.js";
export default function Home() {
  return (
    <div>
      <Portada />
      <div className="grid w-full h-40 grid-cols-1 gap-4 mx-auto md:grid-cols-2 bg-segundo text-terciario">
        <div className="w-2/3 m-auto text-2xl font-bold ">
          <p>Todos los libros en un solo lugar</p>
        </div>
        <div className="w-2/3 my-auto text-l">
          <p className="break-words ">
            ghbshjgbfdshjgbshjbsahjbsdabsmhjbshjbfsadhbshjdsbfjdhhbfhdjsfmdhshmjdsbmsjdhsfbshd
          </p>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
}
