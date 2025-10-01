import { Link } from "react-router-dom";
import ImageNotFound from "../assets/imgs/erro-404.png";

export function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>

      <img
        src={ImageNotFound}
        alt="Image de página não encontrada"
        className="w-3/5 justify-self-center"
      />

      <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu</p>

      <Link
        to="/"
        className="text-white bg-blue-600 p-2 rounded hover:underline"
      >
        Voltar para Home
      </Link>
    </div>
  );
}