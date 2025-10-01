
export function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Bem-vindo ao Study Tracker! 🚀
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Organize e monitore seu tempo de estudo. Comece adicionando uma nova sessão.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            O que você pode fazer:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Adicionar novas sessões de estudo.</li>
          <li>Visualizar o seu histórico de estudos.</li>
        </ul>
        <p className="mt-4">
            Acesse o link **"Adicionar Estudo"** na barra de navegação para começar!
        </p>
      </div>
    </div>
  );
}