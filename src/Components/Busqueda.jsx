import { useState } from "react";
import { Link } from "react-router-dom";

const Busqueda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") return;

    try {
      const response = await fetch(
        `http://localhost:8080/Herramientas/buscar/${searchQuery}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(Array.isArray(data) ? data : [data]);
        setShowResults(true); // Show results when fetched
      } else {
        console.error("Failed to fetch search results");
        setSearchResults(null); // Reset search results on fetch failure
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setShowResults(false);
  };

  const handleInputFocus = () => {
    setShowResults(true); // Show results when input is focused
  };

  return (
    <div>
      <form
        className="w-4/5 md:w-1/2 mx-auto mb-6 relative"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="default-search" className="sr-only">
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="relative z-40 w-full px-6 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50  focus:border-colorPrimario"
            placeholder="Qué estás buscando?"
            autoComplete="off"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus} // Show results when input is focused
            required
          />
          <button
            type="submit"
            className="text-colorClaro bg-colorPrimario absolute right-2 bottom-2 hover:bg-colorPrimarioHover focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-1.5 transition-all"
          >
            Buscar
          </button>
        </div>
        {showResults && ( // Render search results only when showResults state is true
          <div className="absolute top-[20px] pt-10 pb-4 pl-4 w-full rounded-xl bg-[#e4e2d7]">
            {searchResults ? (
              <ul>
                {searchResults.map((item) => (
                  <Link key={item.id} to={"/detail/" + item.id}>
                    <li className="w-[4em] flex items-center gap-2">
                      <img src={item.imagenes[0].url} alt={item.nombre} />
                      <p> {item.nombre}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Busqueda;
