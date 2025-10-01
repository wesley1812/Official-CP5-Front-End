import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
          Study Tracker 📚
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200 transition duration-300"
          >
            Início
          </Link>
          <Link to="/NovaSessao" className="text-white hover:text-blue-200 transition duration-300"
          >
            Adicionar Estudo
          </Link>
          <Link to="/sessions"className="text-white hover:text-blue-200 transition duration-300"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </nav>
  );
}