import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleUploadClick = () => {
    setIsLoading(true);

    // Simula una carga ficticia durante 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      setIsPending(true);

      // Simula un tiempo de "pending to update" durante 3 segundos
      setTimeout(() => {
        setIsPending(false);
      }, 1000);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-500"></div>
            <span className="ml-2">Cargando...</span>
          </div>
        ) : (
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleUploadClick}
          >
            Cargar Contenido
          </button>
        )}
        {isPending && (
          <div className="mt-4 relative w-full h-full">
            <div className="border-4 border-transparent border-t-[2px] border-indigo-500 w-16 h-16 animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <span className="ml-2 text-center text-xl">Pending to update</span>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
